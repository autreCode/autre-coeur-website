# Autre Coeur | NFT Artist Website
Welcome to the source code of autre coeur, a portfolio and personal webpage for a multimedia artist specializing in NFTs and painting. This website showcases the art, provides information about the artist, and allows visitors to navigate through the artist's diverse works.

## Table of Contents
**[Features](##features)<br>
[Installation and Setup](##installation-and-setup)<br>
[Technology Stack](##technology-stack)<br>
[File Structure](##file-structure)<br>
[Contributing](##contributing)<br>
[License](##license)<br>**

## Features
- **Responsive Header**: Contains the artist's name/logo and navigation links (Home, Work, About, and Resources).<br>
- **index.html - Hero Section**: Features an image or looping video, collection.<br>
- **index.html - Work Section**: Grid layout displaying different art categories, each having its own thumbnail (videos and / or images).<br>
- **index.html - About Section**: Contains a portrait of the artist, a detailed biography, and links to further information.<br>
- **Footer**: The footer is designed to ground the website with essential information. It includes:
  - Copyright Information: This section ensures the artist's work is protected and denotes the rights associated with it.
  - Social Links: Interactive SVG icons that link to the artist's various social media platforms, allowing visitors easy access to follow and engage.

## Installation and Setup
1. Clone the repository.
2. Navigate to the project folder.
3. Open index.html in your preferred browser to navigate to the locally stored homepage.
4. Use your preferred code editor to trace links from index.html and make any changes.

## Technology Stack
- **HTML5**: Used for structuring the content.<br>
- **CSS (Tailwind)**: For styling. (Tailwind CSS framework is utilized.)<br>
- **JavaScript**: For functionality. (Specifics can be found in js/gtag.js and any other linked JS files.)<br>
- **Google Fonts**: Poppins font is being used from Google Fonts.<br>
- **Favicons**: Multiple favicon sizes have been provided for different devices.<br>
- **Media Files**: The site incorporates a mix of media formats including JPG, PNG, MOV and SVG files to optimize visual clarity and website performance.<br>

## File Structure
- **index.html**: The main landing page.
  - **resources.html**: Resources landing page with article list styling.
    - **o.html**: A non-technical description of the creation of the collection 'O'
    - **creating-on-chain-nfts.html**: A detailed, technical document on creating on-chain NFTs using JavaScript with embedded styled code.
    - **process.html**: A brief, non-technical page on the artist's process with embedded image.
  - **gan-summary.html**: GAN art landing page with portfolio layout and description.
    - **gan-psy-goats.html.html; gan-mariana-peak.html; gan-misc.html**: Portfolio pages which reference files in 'collections json' for image detail & pulling images from IPFS
  - **illustration-summary.html**: Illustration landing page with the same layout as gan-summary.html
    - **illustration-qut.html**: Portfolio pages with the same styling and functioning in the same way as those under gan-summary.html
    - **illustration-other.html**: Page on the artist's illustration career with examples of work.
  - **press.html; faq.html**: article page with the same layout as resources.html and single page faq with header and body texts.
- **tailwind.css**: Contains styling for the website.
- **tailwind.config.js**: Configuration for the Tailwind CSS framework:
  - *darkMode*: Set to 'media' (the website will automatically switch to dark mode based on the user's system preference.)
  - *colors*: Custom colors are defined here, which can then be used throughout the site by referencing these names. This helps maintain a consistent color scheme.
  - *fontFamily*: Specifies custom font definitions. Here, the 'Poppins' font is added and set as the default sans-serif font.
  - *variants*: This is an extension point. Right now, no specific variants are extended, but it provides a place to customize or add responsiveness or states (like hover, focus) to various utilities.
- **robots.txt**: Typical robots.txt instructing all user-agents (i.e., web crawlers) to access and index all parts of the site (the Disallow: directive without a following path means there are no restrictions.)
- **js/main.js**: Contains JavaScript functionalities.
- **collections json/**: Directory containing NFT collection metadata and IPFS image addresses.
- **img/**: Directory containing all the images and videos utilized on the website.
- **favicons/**: Directory containing favicons and related metadata.

## Contributing
Feel free to fork this project, make changes, and submit pull requests. Any contributions, no matter how minor, are greatly appreciated.
Note that I also working on an update.

## License
This repository is provided under the GNU GPLv3 license, which means you can do almost anything you want with your project, except for distributing closed source versions. For more information, please visit https://choosealicense.com/.
