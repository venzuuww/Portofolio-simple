# Portfolio Website

A modern, responsive portfolio website built with Python Flask and TailwindCSS.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Contact form for easy communication
- Project showcase section
- About me section with skills and experience
- Built with Flask and TailwindCSS

## Prerequisites

- Python 3.8 or higher
- pip (Python package installer)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
- On Windows:
```bash
venv\Scripts\activate
```
- On macOS/Linux:
```bash
source venv/bin/activate
```

4. Install the required packages:
```bash
pip install -r requirements.txt
```

## Running the Application

1. Make sure your virtual environment is activated

2. Run the Flask application:
```bash
python app.py
```

3. Open your web browser and navigate to:
```
http://localhost:5000
```

## Project Structure

```
portfolio-website/
├── app.py              # Main Flask application
├── requirements.txt    # Python dependencies
├── static/            # Static files
│   ├── css/          # CSS files
│   ├── js/           # JavaScript files
│   └── images/       # Image files
└── templates/        # HTML templates
    ├── base.html     # Base template
    ├── index.html    # Home page
    ├── about.html    # About page
    ├── projects.html # Projects page
    └── contact.html  # Contact page
```

## Customization

1. Update the content in the HTML templates to match your information
2. Modify the styles in `static/css/style.css` to match your preferences
3. Add your own images to the `static/images` directory
4. Update the project information in the projects section

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details. 