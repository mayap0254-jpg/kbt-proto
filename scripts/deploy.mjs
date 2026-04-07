#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🚀 Starting deployment...\n');

try {
  // Stage all changes
  console.log('📦 Staging changes...');
  execSync('git add -A', { stdio: 'inherit' });

  // Check if there are changes to commit
  const status = execSync('git status --porcelain').toString().trim();
  
  if (status) {
    // Commit changes
    console.log('💾 Committing changes...');
    execSync('git commit -m "Build: Deploy ThermalWall AI SaaS application\n\n- Created landing page with hero, features, and CTA sections\n- Built dashboard with sidebar navigation and responsive layout\n- Implemented thermal analysis page with temperature distribution visualization\n- Added optimization engine with AI-generated material recommendations\n- Created materials list with cost breakdown\n- Built procurement workflow with supplier selection\n- Generated report page with performance analysis charts\n- Added settings page with profile and notification management\n- Fixed DialogContent accessibility warnings with aria-describedby\n- Configured dark theme with teal/cyan accent colors for thermal AI aesthetic"', { stdio: 'inherit' });
  } else {
    console.log('✅ No changes to commit');
  }

  // Push to GitHub
  console.log('\n🔄 Pushing to GitHub...');
  execSync('git push', { stdio: 'inherit' });

  console.log('\n✅ Deployment complete!');
  process.exit(0);
} catch (error) {
  console.error('\n❌ Deployment failed:', error.message);
  process.exit(1);
}
