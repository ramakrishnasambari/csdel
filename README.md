# CSDEL Website

Council for Sustainability Development Environment and Livelihoods

## Getting Started

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

## Project Structure

- `src/components/` - React components
  - `Header.js` - Navigation header with logo and menu
  - `Hero.js` - Hero section with image slideshow
  - `WhoWeAre.js` - About section
  - `WhatWeDo.js` - Services/Activities section
  - `OurTeam.js` - Team members section
  - `Contact.js` - Contact form and information

## Adding Images

### Slideshow Images
Place your slideshow images in `public/images/` folder with the following names:
- slide1.jpg
- slide2.jpg
- slide3.jpg
- slide4.jpg

### Logo
Place your logo as `public/logo.png`

### Team Photos
Place team member photos in `public/images/` folder as:
- team1.jpg
- team2.jpg
- team3.jpg
- team4.jpg

## Features

- Responsive design
- Smooth scrolling navigation
- Animated image slideshow with zoom/fade effects
- Fixed header that adapts on scroll
- Modern, clean UI
- Contact form
- Mobile-friendly layout

## Customization

You can customize the content by editing the respective component files in the `src/components/` directory.
