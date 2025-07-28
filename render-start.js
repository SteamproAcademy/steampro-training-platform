// This file is used by Render to start the server in production
import { fileURLToPath } from 'url';
import path from 'path';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build the server
console.log('Building server...');
try {
  execSync('npm run build:server', { stdio: 'inherit' });
  console.log('Server built successfully!');
  
  // Start the server
  console.log('Starting server...');
  const serverPath = path.join(__dirname, 'dist', 'index.js');
  import(serverPath);
} catch (error) {
  console.error('Failed to build or start server:', error);
  process.exit(1);
}
