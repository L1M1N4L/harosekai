import React, { useState, useEffect } from 'react';

const Arrow = () => (
  <div style={{ textAlign: 'center', margin: '0.5rem 0', color: '#334155' }}>↓</div>
);

const Box = ({ children }) => (
  <div style={{
    background: 'white',
    border: '1px solid #0f172a',
    borderRadius: 8,
    padding: '0.85rem 1rem',
    boxShadow: '0 1px 2px rgba(15, 23, 42, 0.06)',
    fontSize: '1rem'
  }}>
    {children}
  </div>
);

const FormulaBox = ({ children }) => (
  <div style={{
    background: '#eef7ff',
    border: '1px solid #60a5fa',
    borderRadius: 8,
    padding: '0.85rem 1rem',
    fontFamily: 'monospace',
    overflowX: 'auto'
  }}>
    {children}
  </div>
);

const Stage = ({ title, children }) => (
  <section style={{ marginBottom: '1.25rem' }}>
    <div style={{
      fontWeight: 800,
      letterSpacing: '0.06em',
      fontSize: '1.05rem',
      color: '#0f172a',
      marginBottom: '0.75rem'
    }}>
      {title}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {children}
    </div>
  </section>
);

const Parallel = ({ children }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
    {children}
  </div>
);

const Grid = ({ columns = 2, children }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: '0.5rem'
  }}>
    {children}
  </div>
);

const Pipeline = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: 'monospace',
      lineHeight: 1.6,
      color: '#333',
      background: 'white',
      fontSize: '1.2rem',
      minHeight: '100vh'
    }}>
      <header style={{ borderBottom: '1px solid #e2e8f0', background: 'linear-gradient(90deg, #f8fafc, #eef2ff)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '1.5rem 1rem' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '0.06em', color: '#1f2937' }}>Proposed Methodology Pipeline (Detailed)</div>
          <div style={{ color: '#475569', fontSize: '0.95rem' }}>Flowchart overview</div>
        </div>
      </header>

      <main style={{ maxWidth: 800, margin: '0 auto', padding: '1.5rem 1rem' }}>
        {/* Stage 1 */}
        <Stage title="Stage 1: Data Acquisition & Preprocessing">
          <Parallel>
            <Box>Collect FSRS-Anki-20k (HuggingFace dataset)</Box>
            <Box>Collect Harvard Dataverse (spaced repetition logs)</Box>
          </Parallel>
          <Arrow />
          <Box>Merge datasets</Box>
          <Arrow />
          <Box>Map to SSP-MMC-Plus schema:
u, w, i, d, t_history,
r_history, delta_t, r, p_recall, total_cnt</Box>
          <Arrow />
          <Box>Preprocessing:
- Remove inconsistencies
- Normalize review intervals
- Handle missing values</Box>
        </Stage>

        {/* Stage 2 */}
        <Stage title="Stage 2: Feature Engineering">
          <Box>Extract review intervals</Box>
          <Arrow />
          <Box>Encode review history (time series)</Box>
          <Arrow />
          <Box>Generate recall labels</Box>
          <Arrow />
          <Box>Build predictor inputs (features)</Box>
        </Stage>

        {/* Stage 3 */}
        <Stage title="Stage 3: Half-life Modeling & Training">
          <Box>Define half-life: Time until recall probability=0.5</Box>
          <Arrow />
          <Box>Estimate Half-life: Regression / ML predictor</Box>
          <Arrow />
          <FormulaBox>p(Δt) = 2^(-Δt/h)</FormulaBox>
          <Arrow />
          <Box>Train memory model:
- Half-life regression
- ML-based recall predictor</Box>
        </Stage>

        {/* Stage 4 */}
        <Stage title="Stage 4: Replay with Scheduling Policies">
          <Box>Input trained model</Box>
          <Arrow />
          <Grid columns={isMobile ? 1 : 2}>
            <Box>Apply SM-2 policy</Box>
            <Box>Apply FSRS policy</Box>
            <Box>Apply ML-only policy</Box>
            <Box>Apply Threshold / Hybrid policy</Box>
          </Grid>
          <Arrow />
          <Box>Simulator generates recall probabilities for each policy</Box>
        </Stage>

        {/* Stage 5 */}
        <Stage title="Stage 5: Forward Simulation">
          <Box>Extend synthetic reviews up to 365 days</Box>
          <Arrow />
          <Box>Generate recall outcomes over time</Box>
        </Stage>

        {/* Stage 6 */}
        <Stage title="Stage 6: Evaluation Metrics">
          <Grid columns={isMobile ? 1 : 2}>
            <Box>Recall Curves: Average recall @30, 60, 180, 365d</Box>
            <Box>THR (Target Half-life Reached): % items with h ≥ 180/365 days</Box>
            <Box>SRP (Summation of Recall Probability)</Box>
            <Box>WTL (Words Total Learned): Recall ≥90% for last 3 reviews</Box>
            <Box>Daily Cost: Average reviews/day</Box>
            <Box>Efficiency = SRP ÷ Cost</Box>
          </Grid>
        </Stage>

        {/* Stage 7 */}
        <Stage title="Stage 7: Cross-dataset Validation">
          <Box>Train on FSRS-Anki-20k, Test on Harvard</Box>
          <Arrow />
          <Box>Train on Harvard, Test on FSRS-Anki-20k</Box>
          <Arrow />
          <Box>Compare results for robustness</Box>
        </Stage>
      </main>
    </div>
  );
};

export default Pipeline;

