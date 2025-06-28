import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

/**
 * MagicArea wraps a group of interactive elements and animates a highlight/underline
 * that follows the hovered/focused element. Use for nav, cards, etc.
 *
 * Usage:
 * <MagicArea>
 *   <a>...</a>
 *   <a>...</a>
 * </MagicArea>
 */
const MagicArea = ({ children, className = '', highlightClass = '', style = {} }) => {
  const containerRef = useRef(null);
  const magicRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const magic = magicRef.current;
    const items = itemRefs.current.filter(Boolean);
    if (!container || !magic || !items.length) return;

    const getRect = (el) => {
      const rect = el.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();
      return {
        left: rect.left - parentRect.left,
        top: rect.top - parentRect.top,
        width: rect.width,
        height: rect.height
      };
    };

    const setMagicTo = (el, animate = true) => {
      if (!el) return;
      const { left, top, width, height } = getRect(el);
      if (animate) {
        gsap.to(magic, { left, top, width, height, duration: 0.18, ease: 'power2.out' });
      } else {
        gsap.set(magic, { left, top, width, height });
      }
    };

    const getActive = () =>
      items.find(
        (el) =>
          el && (el.classList.contains('is-magic-active') ||
          el.getAttribute('aria-current') === 'page')
      ) || items[0];

    setMagicTo(getActive(), false);

    const handleEnter = (el) => () => setMagicTo(el, true);
    const handleLeave = () => setMagicTo(getActive(), true);

    items.forEach((el) => {
      if (!el) return;
      el.addEventListener('mouseenter', handleEnter(el));
      el.addEventListener('focus', handleEnter(el));
      el.addEventListener('mouseleave', handleLeave);
      el.addEventListener('blur', handleLeave);
    });

    const handleResize = () => setMagicTo(getActive(), false);
    window.addEventListener('resize', handleResize);
    return () => {
      items.forEach((el) => {
        if (!el) return;
        el.removeEventListener('mouseenter', handleEnter(el));
        el.removeEventListener('focus', handleEnter(el));
        el.removeEventListener('mouseleave', handleLeave);
        el.removeEventListener('blur', handleLeave);
      });
      window.removeEventListener('resize', handleResize);
    };
  }, [children]);

  const childrenWithRefs = React.Children.map(children, (child, i) =>
    React.cloneElement(child, {
      ref: (el) => (itemRefs.current[i] = el),
      tabIndex: child.props.tabIndex ?? 0
    })
  );

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ display: 'flex', ...style }}>
      <div
        ref={magicRef}
        className={`absolute pointer-events-none transition-all duration-150 ${highlightClass}`}
        style={{
          zIndex: 1,
          borderRadius: 8,
          background: 'rgba(100, 116, 139, 0.10)', // slate-500/10
          transition: 'all 0.18s cubic-bezier(.4,0,.2,1)',
        }}
      />
      <div className="flex w-full z-10">{childrenWithRefs}</div>
    </div>
  );
};

export default MagicArea; 