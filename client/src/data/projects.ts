export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: "featured" | "hardware" | "software" | "research";
  links: {
    github?: string;
    demo?: string;
    docs?: string;
    paper?: string;
    linkedin?: string;
    colab?: string;
    youtube?: string;
  };
}

export const projects: Project[] = [
  // Featured Projects
  {
    id: "ml-hardware-failure",
    title: "Machine Learning Hardware Failure Classification System",
    description: "Engineered an advanced dual CNN architecture for automated hardware failure detection using specialized models for continuous and discrete sensor data.",
    tags: ["Python", "TensorFlow", "Deep Learning", "MLOps", "GUI"],
    category: "featured",
    links: {
      linkedin: "https://www.linkedin.com/in/saif-s-elsaady-78091425a/details/projects/1752181177815/single-media-viewer?type=DOCUMENT&profileId=ACoAAD_Z_FABQWyffCs4GMuY27eD-NRSpekP7G0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BsIpY9B47Qvyx%2BbTseUzCLg%3D%3D"
    }
  },
  {
    id: "submarine-mine-detection",
    title: "Submarine Mine Detection System - Machine Learning Approach",
    description: "Achieved 88.89% accuracy in life-critical submarine mine detection using PCA-optimized Multi-Layer Perceptron neural networks.",
    tags: ["Python", "PCA", "Neural Networks", "Defense Technology", "scikit-learn"],
    category: "featured",
    links: {
      linkedin: "https://www.linkedin.com/in/saif-s-elsaady-78091425a/details/projects/1752178836019/single-media-viewer?type=DOCUMENT&profileId=ACoAAD_Z_FABQWyffCs4GMuY27eD-NRSpekP7G0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BsIpY9B47Qvyx%2BbTseUzCLg%3D%3D"
    }
  },
  {
    id: "weather-station-featured",
    title: "Weather Station",
    description: "Developed a mobile PCB with I2C/SPI sensors, power-efficient architecture, and field-tested calibration for environmental monitoring.",
    image: "PCBweather.jpeg",
    tags: ["PCB Design", "I2C", "SPI", "Environmental Monitoring", "Cadence"],
    category: "featured",
    links: {
      github: "https://egr314team311.github.io/team311.github.io/Final_Report.html"
    }
  },

  // Hardware Projects
  {
    id: "flight-controller",
    title: "Flight Controller Development",
    description: "Modeled IMU data using Kalman filtering, assisted with sensor fusion algorithms, and validated performance through real-world UAV testing.",
    image: "Flight_Controller_FC_29_png_alphares.png",
    tags: ["MATLAB", "Kalman Filtering", "IMU", "UAV", "Sensor Fusion"],
    category: "hardware",
    links: {
      github: "https://jhherre3.github.io/Team29LowSwapC/"
    }
  },
  {
    id: "uav-hardware",
    title: "UAV Hardware Integration",
    description: "Designed power and ESC connection systems using a custom PCB, configured Veronte Autopilot, and optimized layout for signal integrity.",
    image: "DroneBody.jpeg",
    tags: ["PCB Design", "Power Systems", "ESC", "Veronte Autopilot"],
    category: "hardware",
    links: {}
  },
  {
    id: "weather-station-hardware",
    title: "Weather Station PCB",
    description: "Built environmental sensor array using temperature, pressure, and wind modules with power-saving switching regulators.",
    image: "FinalDevice.jpeg",
    tags: ["Environmental Sensors", "Power Management", "DRC Verification"],
    category: "hardware",
    links: {
      github: "https://egr314team311.github.io/team311.github.io/Final_Report.html"
    }
  },
  {
    id: "adaptive-apparel",
    title: "Adaptive Apparel PCB",
    description: "Built a BLE-powered wearable on CY8CKIT-142 with low-power C++ firmware and user safety compliance.",
    image: "SpidermanPCB.jpeg",
    tags: ["BLE", "C++", "Wearable Technology", "Safety Compliance"],
    category: "hardware",
    links: {
      docs: "https://docs.google.com/document/d/1lQRAato3axBpb3OnubBcCswt_42VaLtuO0qtRGwALn4/edit?tab=t.0"
    }
  },
  {
    id: "audio-recording",
    title: "Audio Recording Circuit",
    description: "Created an op-amp based audio system using ISD1700, including playback, erase, and amplification logic.",
    image: "Circuitaudio.png",
    tags: ["Op-Amp", "ISD1700", "Audio Processing", "LM741"],
    category: "hardware",
    links: {
      youtube: "https://www.youtube.com/watch?v=tIN8QrGogaU"
    }
  },
  {
    id: "servo-control",
    title: "Servo-Controlled Testing System",
    description: "Automated servo motion and sensor feedback with Arduino firmware and Serial Monitor controls.",
    image: "ArduinoFlowchart.jpg",
    tags: ["Arduino", "PWM", "Load Cell", "LVDT", "Automation"],
    category: "hardware",
    links: {}
  },
  {
    id: "temperature-sensor",
    title: "Custom Temperature Sensor",
    description: "Built a PCB + I2C sensor system with LED debugging and oscilloscope testing workflows.",
    tags: ["I2C", "Temperature Sensing", "LED Debugging", "Oscilloscope"],
    category: "hardware",
    links: {}
  },

  // Software Projects
  {
    id: "eda-compliance",
    title: "EDA Compliance Validation GUI System",
    description: "Engineered enterprise-grade desktop application featuring dynamic plugin architecture with importlib-based module loading.",
    tags: ["Python", "tkinter", "MVC Architecture", "CSV Processing"],
    category: "software",
    links: {
      linkedin: "https://www.linkedin.com/in/saif-s-elsaady-78091425a/details/projects/1752181921260/single-media-viewer?type=DOCUMENT&profileId=ACoAAD_Z_FABQWyffCs4GMuY27eD-NRSpekP7G0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BsIpY9B47Qvyx%2BbTseUzCLg%3D%3D"
    }
  },

  // Research Projects
  {
    id: "sea-turtle-survival",
    title: "Sea Turtle Survival",
    description: "Modeled endangered populations using Leslie matrices and simulated conservation strategy outcomes.",
    image: "AGEMODEL.png",
    tags: ["Leslie Matrices", "Conservation Biology", "IUCN Data", "Population Modeling"],
    category: "research",
    links: {
      colab: "https://colab.research.google.com/drive/1Q99aIMV8y3LL3m8ud0Pt17700qDMT20S"
    }
  },
  {
    id: "bird-biodiversity",
    title: "Bird Biodiversity",
    description: "Performed ANOVA and regression on urban vs. rural species diversity using CAP LTER data.",
    tags: ["R", "ANOVA", "Statistical Analysis", "CAP LTER", "Biodiversity"],
    category: "research",
    links: {
      linkedin: "https://www.linkedin.com/in/saif-s-elsaady-78091425a/details/projects/1740638687791/single-media-viewer/?profileId=ACoAAD_Z_FABQWyffCs4GMuY27eD-NRSpekP7G0"
    }
  },
  {
    id: "tem-thin-films",
    title: "TEM for Thin Films",
    description: "Used microscopy and FEA to study grain boundaries, voiding, and delamination in thin-film semiconductors.",
    image: "STRESST.jpeg",
    tags: ["TEM", "FEA", "Python Modeling", "SciPy", "Materials Science"],
    category: "research",
    links: {}
  },
  {
    id: "perovskite-ethics",
    title: "Perovskite Research Ethics",
    description: "Explored ethics of solar innovation, data transparency, and conflicts of interest in green tech.",
    tags: ["Research Ethics", "Solar Technology", "Data Transparency", "Green Tech"],
    category: "research",
    links: {
      linkedin: "https://www.linkedin.com/in/saif-s-elsaady-78091425a/details/projects/1736820104121/single-media-viewer/?profileId=ACoAAD_Z_FABQWyffCs4GMuY27eD-NRSpekP7G0"
    }
  },
  {
    id: "petase-filtration",
    title: "PETase Filtration System",
    description: "Designed a water pitcher with plastic-eating enzyme membrane and validated filtration performance.",
    image: "FILTER.jpg",
    tags: ["PETase Enzyme", "Microplastics", "Water Filtration", "Sustainability"],
    category: "research",
    links: {
      linkedin: "https://www.linkedin.com/in/saif-s-elsaady-78091425a/details/projects/1364895872/multiple-media-viewer/?profileId=ACoAAD_Z_FABQWyffCs4GMuY27eD-NRSpekP7G0&treasuryMediaId=1740163223354"
    }
  },
  {
    id: "urban-green-space",
    title: "Urban Green Space GIS",
    description: "Modeled biodiversity and access in Tempe, AZ using GeoPandas and open street map data.",
    image: "Heattree.jpg",
    tags: ["GIS", "GeoPandas", "Urban Planning", "Biodiversity", "OSMnx"],
    category: "research",
    links: {
      docs: "https://docs.google.com/document/d/1TZRP6A4-CvUWnU3l3kYcBU2yQYpV2cdJVXPOmOcaHZg/edit?usp=sharing"
    }
  }
];