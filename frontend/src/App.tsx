import React, { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');
    try {
      const res = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResult(data.result || data.error);
    } catch (err) {
      setResult('エラーが発生しました');
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Claude API デモ</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          rows={4}
          style={{ width: '100%' }}
          placeholder="Claudeへの質問を入力"
        />
        <button type="submit" disabled={loading} style={{ marginTop: 8 }}>
          {loading ? '送信中...' : '送信'}
        </button>
      </form>
      <div style={{ marginTop: 24 }}>
        <strong>結果:</strong>
        <div style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>{result}</div>
      </div>
    </div>
  );
}

export default App;
