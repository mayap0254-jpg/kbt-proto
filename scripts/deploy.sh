#!/bin/bash

# Commit changes to git
git add -A
git commit -m "Build: Deploy ThermalWall AI SaaS application

- Created landing page with hero, features, and CTA sections
- Built dashboard with sidebar navigation and responsive layout
- Implemented thermal analysis page with temperature distribution visualization
- Added optimization engine with AI-generated material recommendations
- Created materials list with cost breakdown
- Built procurement workflow with supplier selection
- Generated report page with performance analysis charts
- Added settings page with profile and notification management
- Fixed DialogContent accessibility warnings with aria-describedby
- Configured dark theme with teal/cyan accent colors for thermal AI aesthetic"

# Deploy to Vercel
vercel deploy --prod --scope team_LgALYU50EgDli596OoOmiTzx
