export function getEnvironmentMode(): string {
  return `${process.env.NODE_ENV}`;
}

export function getApiBase(): string {
  return `${process.env.API_BASE}`;
}
