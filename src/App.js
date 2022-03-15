import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import SubSection from './components/SubSection';

function App() {
  const today = new Date()

  const webTechnologies = {
    skills: ['html', 'css', 'less', 'sass', 'javascript', 'php', 'react'],
    experience: [`${today.getFullYear() - 2008} years in general.`,
      `${today.getFullYear() - 2018} Years experience in react.`],
    achievements: 'Both as an independent or as part of a company, I have built a reputation as a very fast worker with high quality in terms of soft skills and website development.',
    projects: [
      { link: 'https://www.cmecenter.com/', label: 'Presentational website using React as the frontend but using a custom framework with a Wordpress backend (wordpres/react)' },
      { link: 'https://www.tecma.com/', label: 'Presentational website with a custom page builder based on Gutenberg blocks (wordpress/bedrock/sage/blade).' },
      { link: 'https://stage.pralaw.com/', label: 'Presentational website with a custom page builder based on Gutenberg blocks, aimed at speed (wordpress/bedrock/sage/blade).' },
      { link: 'https://www.eliteediting.com.au/', label: 'Online service similar to UpWork  but aimed at Academic Editing  (wordpress/elementor/gravityforms).' }
    ]
  }

  const webScripting = {
    skills: ['php', 'python', 'java', 'javascript'],
    experience: ['Php (from legacy to the newest one), object oriented.',
      'Python with Django.',
      'Java, JSP, XML.',
      'JavaScript jquery, prototype, ES6.'],
    achievements: `When I joined the crew in WebStudio I inherited a very unstable CMS that it was a mystery to the other employees, a web application that was inaccessible and only worked in Internet Explorer, and a technical team that had no members. <br /><br />
    I redesigned the CMS giving it more stability and scalability according to customer requirements of this project, and managed to build a successful technical team. <br /><br />
    I end up developing a custom CMS after that experience based on CodeIgniter Ussed during my freelancer stage. Working with WordPress I managed to implement a very clean structure that provided
    a solid foundation for the websites to receive updates safely over time. <br /><br />
    Some of them are still using the same code base of 8 years ago. I was also able to upgrade roots to sage when the previous one dropped grunt support.`,
    projects: [
      { link: 'https://smartartsouth.com/', label: 'Web Agency main website (wordpress/sage).' },
      { link: 'https://communitycleaningandmaintenance.com/', label: 'Simple website (wordpress/sage).' },
      { link: 'https://glennsflooring.com/', label: 'Simple website (custom design/wordpress).' },
      { link: 'https://dixiefry.com/', label: 'Built on a budget. Very clean code with custom effects for the recipes (responsive/wordpress/custom plguin).' },
      { link: 'https://oh-institute.org/main/home.php', label: 'It was one of my very first projects and it\'s still alive! (I had to list it here/ Plain code).' }
    ]
  }

  const frameworks = {
    skills: ['codeigniter', 'wordpress', 'joomla', 'moodle', 'drupal', 'django', 'gatsbyjs', 'woocommerce', 'tailwindcss', 'bootstrap', 'foundation'],
    experience: [`${today.getFullYear() - 2009} years.`],
    achievements: `Adaptability and Flexibility to work on multiple frameworks. But lately with Wordpress and react projects. I've been promoted many times during my career.<br /><br />
    From Programer to Team Lead to Project Manager, and sometimes Designer roles, but all this happened over many iterations, so one of the best achievements was for 
    me to experience the whole process.`,
    projects: [
      { link: 'https://boarddirection.com.au/', label: 'Responsive online training website with Membership e-commerce (wordpress/elementor/custom plugin/woocommerce/subscriptions).' },
      { link: 'https://buildinoz.com.au/', label: 'Responsive real state website, with focus on marketing and analitics (wordpress/sage).' },
      { link: 'https://greentestprep.com/', label: 'Responsive training program for SAT and ACT exams with integration to external CRM system (wordpress/keap formerly infusionsoft).' },
      { link: 'https://epicproacademy.com/', label: 'Responsive website that sells a training program fro real state businesses (wordpress/custom plugin/keap formerly infusionsoft/learndash).' }
    ]
  }

  const database = {
    skills: ['MySQL/MariaDB', 'PostgreSQL', 'SQLite', 'MongoDB', 'DatoCMS', 'Contentfull'],
    experience: [`${today.getFullYear() - 2012} years.`],
  }

  const graphicDesign = {
    skills: ['Photoshop', 'Illustrator', 'Balsamiq', 'Figma'],
    experience: [`${today.getFullYear() - 2016} years.`],
    achievements: 'Design for the: proluxury website, chifa restaurant, epicproacademy, boarddirection.'
  }

  const seo = {
    skills: ['Keywords', 'MetaTags', 'Social Marketing', 'Ranking management', 'GTM'],
    experience: [`${today.getFullYear() - 2015} years.`],
    achievements: 'For 70% of web sites that required this service we achieved an important position in major search engines (google, bing).'
  }

  const academicBackground = {
    custom: [
      { label: '2010', description: '<strong>Berlitz French Learning Program</strong> <br />French language, basic level.' },
      { label: '2008', description: '<strong>Systems Engineer Degree</strong> <br />Universidad Mayor de San Simón.' },
      { label: '2008-2010', description: '<strong>English Program, American Languaje Course</strong> <br />Escuela de Idiomas del Ejercito Bolivia <br />Language learning program for the Bolivian army.' },
      { label: '2009-2010', description: '<strong>Training course for rescue</strong> <br />Grupo de salvamento SAR-Bolivia <br />Volunteer in rescue and first aid for SAR group in the city of Cochabamba.' },
      { label: '2006-2007', description: '<strong>Computer assembly</strong> <br />Universidad Mayor de San Simón <br />Assembly and Repair of computers.' },
    ]
  }

  const experience = {
    custom: [
      { label: 'Incore', description: 'software applications and web development company <br /><strong>position:</strong> Web developer (2020 to 2021).' },
      { label: 'Freelancer', description: 'software applications and web development as a Freelancer (2018 to 2020).' },
      { label: 'WillingWeb', description: 'software applications and web development company <br /><strong>position:</strong> Web developer (2014 to 2018).' },
      { label: 'NoozooDesign', description: 'software applications and web development company <br /><strong>position:</strong> Web developer (2010 to 2014).' },
      { label: 'Validoc', description: 'software applications and web development company <br /><strong>position:</strong> Web developer (2010).' },
      { label: 'DesignBoxweb', description: 'software applications and web development company <br /><strong>position:</strong> Project manager (2009 – 2010).' },
      { label: 'WebStudio', description: 'software applications and web development company <br /><strong>position:</strong> Project manager (2008 – 2009).' },
      { label: 'Bolivian Army Language School', description: 'language school <br /><strong>position:</strong> English teacher (2009 – 2010).' },
    ]
  }

  const additional = {
    custom: [
      {
        label: 'Languages', description: `English <small>Average</small><br />
      French <small>Basic</small><br />
      Spanish <small>Average</small><br />
      Japanese <small>Basic</small><br /><br />
      I have been working under agile methodologies Scrum and XP in conjunction with Pomodore. <br /><br />
      I'm a team player! I provide efficiency and quality from my many roles across different areas and for different teams, projects, or as a freelancer. Delivering satisfaction for the customers.` },
    ]
  }

  return (
    <div className="App">
      <Header />

      <div className="container mx-auto px-4">

        <Section title="SKILLS / ABILITIES" />

        <SubSection title="Web technologies" {...webTechnologies} />

        <SubSection title="Web scripting" {...webScripting} />

        <SubSection title="Frameworks/CMS" {...frameworks} />

        <SubSection title="Database" {...database} />

        <SubSection title="Graphic Design" {...graphicDesign} />

        <SubSection title="Search Engine Optimization" {...seo} />

        <Section title="ACADEMIC BACKGROUND" />

        <SubSection {...academicBackground} />

        <Section title="EXPERIENCE" />

        <SubSection {...experience} />

        <Section title="ADDITIONAL INFO" />

        <SubSection {...additional} />

        <p className="mb-8">
          <span className="bg-primary text-white font-bold inline-block p-4 rounded-2xl drop-shadow-text-primary text-xl">{today.getFullYear() - 1985} Years old.</span>
        </p>

      </div>
    </div>
  );
}

export default App;
