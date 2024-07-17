import React, { useRef,useState} from 'react';
import '../assets/css/Home.css';
import PersonImg from "../assets/Images/img.jpg";
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import logo from "../assets/Images/logo.png";


const toursData = [
  { id: 1, name: 'Design & creative', number: 653, image: 'https://cdn-icons-png.flaticon.com/512/1909/1909704.png' },
  { id: 2, name: 'Design & Development', number: 658, image: 'https://cdn-icons-png.flaticon.com/512/1589/1589642.png' },
  { id: 3, name: 'Sales & Marketing', number:658, image: 'https://cdn-icons-png.flaticon.com/512/1260/1260103.png' },
  { id: 4, name: 'Mobile Application', number: 658, image: 'https://cdn-icons-png.flaticon.com/512/3254/3254935.png' },
  { id: 5, name: 'Construction', number: 658, image: 'https://cdn-icons-png.flaticon.com/512/2823/2823675.png' },
  { id: 6, name: 'Information technology', number: 658, image: 'https://cdn-icons-png.flaticon.com/512/9872/9872397.png' },
  { id: 7, name: 'Real Estate', number: 658, image: 'https://cdn-icons-png.flaticon.com/512/9202/9202660.png' },
  { id: 8, name: 'Content Writer', number: 658, image: 'https://cdn-icons-png.flaticon.com/512/3079/3079941.png' },
];
const Home = () => {
    //OnClick
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/jobListing")
      // console.log("handleClick");
    }

    //upload Resume
    const fileInputRef = useRef();

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File uploaded:", file.name);
    }
  };
 

      //JobCard
const jobs = [
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list1.png',
    title: 'Design & creative',
    company: 'Creative Agency',
    location: 'Athens, Greece',
    salary: '$3500 - $4000',
    timePosted: '5 hours ago',
    jobType: 'Full Time',
  },
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list2.png',
    title: 'Information technology',
    company: 'Creative Agency',
    location: 'Athens, Greece',
    salary: '$7500 - $8000',
    timePosted: '4 hours ago',
    jobType: 'Full Time',
  },
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list1.png',
    title: 'Design & Development',
    company: 'Creative Agency',
    location: 'Athens, Greece',
    salary: '$3500 - $4000',
    timePosted: '8 hours ago',
    jobType: 'Full Time',
  },
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list3.png',
    title: 'Content Writer',
    company: 'Creative Agency',
    location: 'Athens, Greece',
    salary: '$9500 - $10000',
    timePosted: '10 hours ago',
    jobType: 'Full Time',
  },
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list4.png',
    title: 'Sales & Marketing',
    company: 'Creative Agency',
    location: 'Athens, Greece',
    salary: '$5500 - $6000',
    timePosted: '9 hours ago',
    jobType: 'Full Time',
  },
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list3.png',
    title: 'Mobile Application',
    company: 'Creative Agency',
    location: 'Athens, Greece',
    salary: '$8500 - $9000',
    timePosted: '7 hours ago',
    jobType: 'Full Time',
  },
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list4.png',
    title: 'Design & Development',
    company: 'Creative Agency',
    location: 'Athens, Greece',
    salary: '$3500 - $4000',
    timePosted: '8 hours ago',
    jobType: 'Full Time',
  },
  {
    logo: 'https://themewagon.github.io/jobfinderportal/assets/img/icon/job-list4.png',
    title: 'Construction',
    company: 'Creative Agency',
    location: 'Athens, Greece',
    salary: '$4500 - $5000',
    timePosted: '9 hours ago',
    jobType: 'Full Time',
  },
];

      //APPLY PROCESS
const steps = [
  {
    title: 'Search a job',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    icon: '🔍', // Replace with your actual icon
  },
  {
    title: 'Apply for job',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    icon: '📝', // Replace with your actual icon
  },
  {
    title: 'Get your job',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    icon: '💼', // Replace with your actual icon
  },
];

      //CROUSEL
const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: 'https://img.freepik.com/free-photo/customer-service-cute-brunette-guy-office-suit-with-laptop-headset_140725-164001.jpg',
      name: 'Margaret Lawson',
      title: 'Creative Director',
      quote: 'I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.'
    },
    {
      image: 'https://img.freepik.com/free-photo/young-male-entrepreneur-making-eye-contact-against-blue-background_662251-739.jpg',
      name: 'John Doe',
      title: 'Design and Development',
      quote: 'I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.'
    },
    {
      image: 'https://img.freepik.com/free-photo/portrait-young-businesswoman-sitting-desk-smiling-camera_144627-76708.jpg',
      name: 'Emma',
      title: 'Creative Director',
      quote: 'I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.'
    }
    // Add more testimonials as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };



  return (
    <>
      {/* -------Find the most exciting startup jobs---------- */}
      <div className="home-page">
        <div className="home-content">
          <div className="home-text-section">
            <div className="home-page-header">
              <h1>Find the <br/> most exciting <br/> startup jobs</h1>
            </div>
            <div className="home-page-search-bar">
              <input type="text" placeholder="Job Title or keyword" className="job-title-input" />
              <select className="location-select">
                <option value="BD">Location BD</option>
                <option value="BD">Location PK</option>
                <option value="BD">Location US</option>
              </select>
              <button className="find-job-button">Find Job</button>
            </div>
          </div>
          <div className="image-section">
            <img src={PersonImg} alt="Person" />
          </div>
        </div>
      </div>


      {/* --------Browse Top Categories--------- */}
      <div className="featured-tours">
        <h4>FEATURED TOURS PACKAGES</h4>
        <h1>Browse Top Categories</h1>
        <div className="tours-grid">
          {toursData.map((tour) => (
          <div key={tour.id} className="tour-box">
            <img src={tour.image} alt={tour.name} />
            <h3>{tour.name}</h3>
            <p>{tour.number}</p>
          </div>
          ))}
        </div>
      <button onClick={ handleClick}  className="featured-buttons" role="button"><span class="text">BROWSE ALL SECTORS</span></button>
      </div>


      {/* ---------UPLOAD YOUR RESUME--------- */}
      <div className='upload-container'>
        <h2>FEATURED TOURS PACKAGES</h2>
        <h1>Make a Difference with Your <br/>Online Resume!</h1>
          <button className="upload-button" onClick={handleUploadClick}>
          Upload Your CV
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />   
      </div>


        {/* -------FEATURED JOBS---------- */}
      <div className='featured-jobs-header-rx'>
        <h3>RECENT JOBS</h3>
        <h1>Featured Jobs</h1>
        <div className="job-list">
        {jobs.map((job, index) => (
        <div className="job-card" key={index}>
          <img src={job.logo} alt={`${job.company} logo`} className="job-logo" />
          <div className="job-details">
            <h2 className="job-title">{job.title}</h2>
          <div className="job-company-location-salary">
            <p className="job-company">{job.company}</p>
            <p className="job-location">
            <span role="img" aria-label="location"><IoLocationSharp /></span>
                {job.location}
            </p>
            <p className="job-salary">{job.salary}</p>
          </div>
          </div>
          <div className="job-info">
            <button className="job-type">{job.jobType}</button>
            <p className="job-time">{job.timePosted}</p>
          </div>
          </div>
            ))}
          </div>
      </div>

    
        {/* -----------APPLY PROCESS---------- */}
      <section className="how-it-works">
        <h4>APPLY PROCESS</h4>
        <h1>How it works</h1>
        <div className="steps">
          {steps.map((step, index) => (
        <div className="step" key={index}>
          <div className="icon">{step.icon}</div>
            <h3>{`${index + 1}. ${step.title}`}</h3>
            <p>{step.description}</p>
          </div>
            ))}
        </div>
      </section>


      {/* ---------CROUSEL------ */}
      <div className="carousel">
        <div className="testimonial">
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="testimonial-image" />
          <h3>{testimonials[currentIndex].name}</h3>
          <h4>{testimonials[currentIndex].title}</h4>
          <p>{testimonials[currentIndex].quote}</p>
        </div>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span key={index} className={currentIndex === index ? 'dot active' : 'dot'} onClick={() => setCurrentIndex(index)}></span>
          ))}
        </div>
      </div>


      {/* -----------WHAT WE ARE DOING------------ */}
      <div className="job-section">
        <div className="text-container">
          <h3>WHAT WE ARE DOING</h3>
          <h1>24k Talented people are getting Jobs</h1>
          <p className="lead">
              Mollit anim laborum duis au dolor in voluptate velit <br/> ess cillum dolore eu lore dsu quality mollit anim <br/>laborumuis au dolor in voluptate velit cillum.
          </p>
          <p>
              Mollit anim laborum. Duis aute irufg dhjkolohr in re voluptate <br/> velit esscillumlore eu quife nrulla parihatur. Excepteur <br/> signjnt occa cupidatat non inulpadeserunt mollit aboru. <br/> temnthp incididunt ut labore mollit anim laborum suis aute.
          </p>
          <button className="post-job-button">Post A Job</button>
        </div>
        <div className="image-container-rx">
          <img src={PersonImg} alt="Talented People" className="job-image" />
        <div className="since-1994">
          <span>Since</span>
          <span>1994</span>
        </div>
       </div>
      </div>


      {/* -------Our recent news--------- */}
      <div className="property-section">
          <h3>OUR LATEST BLOG</h3>
          <h1>Our recent news</h1>
        <div className="property-container">
          <div className="property-box">
            <img src="https://img.freepik.com/free-photo/colleagues-work_23-2148499494.jpg" alt="Property 1" className="property-image" />
          <div className="property-info">
            <h3>Properties</h3>
            <p>Footprints in Time is perfect House in Kurashiki</p>
            <a href="#" className="read-more">READ MORE »</a>
          </div>
          </div>
          <div className="property-box">
            <img src="https://img.freepik.com/free-photo/colleagues-working-planning-together_23-2148513798.jpg" alt="Property 2" className="property-image" />
          <div className="property-info">
            <h3>Properties</h3>
            <p>Footprints in Time is perfect House in Kurashiki</p>
            <a href="#" className="read-more">READ MORE »</a>
          </div>
        </div>
        </div>
      </div>


      {/* ---------FOOTER------------- */}
      <footer className="footer">
      <div className="footer-left">
        <div className="footer-column logo-column">
          <img src={logo}  alt="Logo" className="footer_logo" />
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#about-us">About us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#employer-home">Employer home</a></li>
            <li><a href="#sitemap">Sitemap</a></li>
            <li><a href="#credits">Credits</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Help</h3>
          <ul>
            <li><a href="#help-center">Help center</a></li>
            <li><a href="#summons-notices">Summons/Notices</a></li>
            <li><a href="#grievances">Grievances</a></li>
            <li><a href="#report-issue">Report issue</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="#privacy-policy">Privacy policy</a></li>
            <li><a href="#terms-conditions">Terms & conditions</a></li>
            <li><a href="#fraud-alert">Fraud alert</a></li>
            <li><a href="#trust-safety">Trust & safety</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <h3>Connect with us</h3>
        <ul className="social-icons">
          <li><a href="#facebook"><FaFacebook /></a></li>
          <li><a href="#instagram"><FaInstagram /></a></li>
          <li><a href="#twitter"><FaTwitter /></a></li>
          <li><a href="#linkedin"><FaLinkedin /></a></li>
        </ul>
      </div>
      </footer>

    </>
  );
};

export default Home;