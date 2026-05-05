const apiAddress = "http://localhost:8080";

export async function analyzeContract({ text, file, country }) {
  const formData = new FormData();
  if (file) formData.append('file', file);
  if (text) formData.append('text', text);
  if (country) formData.append('country', country);

  const response = await fetch(`${apiAddress}/analyze`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.message || `Server error: ${response.status}`);
  }

  return response.json();
}

export async function healthCheck() {
  const response = await fetch(`${apiAddress}/health`);
  return response.ok;
}
