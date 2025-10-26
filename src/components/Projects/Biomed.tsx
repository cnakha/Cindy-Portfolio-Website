
import { useState } from "react";


function Line(){
  return <div className="mt-20 h-[1px] w-full bg-white/50" />
}

export default function Biomed() {
  const [AppStructPopup, setShowPopup] = useState(false);

  const devices = [
    'MotionSense',  'SparkBeat', 'SparkBeat 2', 'TikTok Tattoo', 'Smart Shoe' ];

  const deviceDescriptions = [
    'A Wearable System for Real-Time Assessment of Lower Body Form and Muscle Engagement During Exercise',
    'Smart Heart rate and Blood Oxygenation Assessment Wristband',
    'Smart Sport Band for Heart Rate and Respiratory Monitoring',
    'Smart Arm Tattoo to Control TikTok',
    'Gait, Balance, and Motion Analysis Smart Shoe'
   ];

  const features = [
      "Motion Tracking",
      "Real-time Data Visualization",
      "Time Tracking and Reporting",
      "Analytics Dashboards",
      "Custom Alerts and Notifications",
      "LED Indicators",
      "Bluetooth Connectivity",
      "Ergonomic Design",
    ];

  const MotionSenseHardware = [
    "MIKROE EMG Click: Placed on the hamstrings to detect electrical activity during muscle engagement.",
    "FSR (Force Sensitive Resistor Sensors): Embedded into shoe insoles to measure foot pressure distribution (toe, heel, lateral, medial).",
    "MPU6050 Accelerometer: Placed on the lower back to track posture and chest angulation.",
    "FIREBEETLE BOARD-32P BLE 4.1: Provides Bluetooth device capabilities.",
    "18650 Li-Ion Battery: Powers the device for up to 8 hours of continuous use.",
  ];

  const MotionSenseDesCriteria = [
    "Shoe Insole for FSR sensors.",
    "Thigh Strap houses EMG sensors.",
    "Waistband Clip contains the FireBeetle board, accelerometer, and battery.",
    "Must display real-time angle of hip hinge",
    "Heat maps, balamce assessment, and Voltage over time graphs from each insole FSR",
    "Visualize Hamstring Engagement",
    "Create an assistive target form interface"
  ];

  const Sparkbeat2Hardware = [
    "FireBeetle Board-328P with BLE4.1 x 2", "FireBeetle Proto Board", "AD8232 Heart Monitor", "ECG leads", "Snap-On ECG electrodes", "Force Sensitive Resistors (FSR)"
  ];

  const Sparkbeat2DesignCriteria = [
    "Fitness, Stress, and Meditation Modes",
    "Real-time Heart Rate and Respiratory Rate Monitoring",
    "Data Logging and Visualization",
    "Adjustable Fit and Comfort",
  ];

  const SmartShoeHardware = [
    "MPU-6050 Accelerometer: Detects motion of the user. We use it to also calculate the period of activity.", 
    "Force Sensitive Resistors (FSR) sensor: Indicates which part of the foot the user applies pressure/force while walking.",
    "LED lights that correspond to each FSR",
    "18650 Li-Ion Battery: Powers the device for up to 8 hours of continuous use.",
  ];

  const SmartShoeDesignCriteria = [
    "Must be worn in the shoe",
    "Identify real-time gait profile, detect acceleration, and determine quality of balance",
    "Display a real-time heatmap uf the foot's pressure points",
    "Graph the Voltage over time of each FSR",
  ];


  const tech = [
    'Processing',
    'Arduino',
    'Figma',
    'React + Node.js + TailwindCSS',
    "Python",
    '3D Printing',
    'FireBeetle Boards',
  ];

  const techDescriptions = [
    'I loved its minimalist approach to anonymous note sharing. Its simple layouts inspired me to strip away unnecessary complexity, keeping WorldNotes focused on the intimacy of expression.',
    'Reinforced the importance of world exploration mechanics. Features like zoom levels, Street View, and metadata overlays shaped how I designed the navigation system for discovering notes.',
    "Sparked ideas around collaborative art, where users can collaborate digitally in one space together. This heavily influenced WorldNotes' note placement and discovery system.",
    'Inspired the drawing experience. I intentionally leaned into primitive, playful tools, which lower barriers to entry and make creation fun rather than intimidating.'
  ];

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-6 ">

        <div className="flex flex-col items-center justify-center">
          <p className="mt-5 text-xl text-center text-white/50 max-w-2xl">
            These five devices empower individuals to monitor their health in fields such as digital health, fitness, assistive, medical, and rehabilitation.
          </p>
        </div>

        <div className="flex flex-col items-center w-full mt-8 text-sm max-w-4xl text-white/70 mx-auto">
          <div className=" flex flex-wrap gap-6 justify-center items-center w-full">
            {devices.map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col text-left items-start bg-[#1f1f1f] border border-white/10 rounded-xl p-6 min-w-[220px] min-h-[220px] max-w-xs flex-1"
              >
                <h5 className="text-lg font-bolder text-white/90 mb-4">{tech}</h5>
                <p className="text-sm text-white/50">{deviceDescriptions[idx]}</p>
              </div>
            ))}
            </div>
        </div> 


        <section className="mt-32">
          <div className="w-full h-full px-6">
            <div className="rounded-xl border border-white/15 bg-[#1f1f1f] p-6 pb-10">
              <h3 className="mb-4 text-white font-semibold">Key Features</h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <ul className="list-disc list-inside space-y-2 text-white/85">
                  {features.slice(0, Math.ceil(features.length / 2)).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <ul className="list-disc list-inside space-y-2 text-white/85">
                  {features.slice(Math.ceil(features.length / 2)).map((feature, idx) => (
                    <li key={idx + Math.ceil(features.length / 2)}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MotionSense */}
        <div className="mt-40 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10">
          <div>
            <h3 className="mt-2 text-4xl font-bolder">
            MotionSense - A Wearable System for Real-Time Assessment of Lower Body Form and Muscle Engagement During Exercise
            </h3>
            <h4 className="mt-20 text-xl text-white/90 font-semibold">Context</h4>
            <p className="mt-2 text-xl text-white/50">
            Poor exercise form, especially during lower body workouts like squats and deadlifts, can lead to long-term injuries and chronic back issues. Without real-time feedback, subtle mistakes often go unnoticed.
            <br /><br />
            A wearable multi-sensor system can monitor lower back posture, hamstring activation, and foot pressure, providing corrective insights to reduce injury and improve training effectiveness.
            </p>

            <h4 className="mt-20 text-xl text-white/50"><span className="font-semibold text-white/90">Tech Stack </span>: React.js, Tailwind CSS, Node.js, Arduino C++</h4>

            <h4 className="mt-10 text-xl text-white/90 font-semibold">Hardware</h4>
            <ul className="list-disc mt-4 pl-6 space-y-2 text-white/50">
              {MotionSenseHardware.map((feature, idx) => (
                <li key={idx} className="pl-1">{feature}</li>
              ))}
            </ul>

            
            <h4 className="mt-20 text-xl text-white/90 font-semibold">Design Criteria</h4>
            <ul className="list-disc mt-4 list-inside space-y-2 text-white/50">
              {MotionSenseDesCriteria.slice(0, MotionSenseDesCriteria.length ).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            
            <h4 className="mt-20 text-xl text-white/90 font-semibold">Evaluation</h4>
            <p className="mt-2 text-xl text-white/50">
              Preliminary testing using squats and lunges across multiple users showed that EMG sensors detected hamstring activation within 50 milliseconds, FSR readings distinguished balanced vs. forward-leaning postures, and accelerometers consistently tracked trunk angle. The system accurately identified poor form in 84% of misaligned trials and delivered corrective feedback based on sensor thresholds and movement patterns.
            </p>
          </div>

          <div className="mt-5 relative aspect-[4/10] overflow-hidden flex justify-center">
            <img
              src="/biomed_devices/p1.png"
              alt="MotionSense prototype"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <Line/>

        {/* Smart Shoe */}
        <div className="mt-40 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10">
          <div>
            <h3 className="mt-2 text-4xl font-bolder">
              Smart Shoe - Wearables for Motion, Balance, and Gait Analysis
            </h3>
            <h4 className="mt-20 text-xl text-white/90 font-semibold">Context</h4>
            <p className="mt-2 text-xl text-white/50">
            A wearable smart shoe insole with force sensors and accelerometers to analyze the user’s real-time walk patterns. Our device informs the user which part of the foot they use more while walking through a heatmap. Example: Walking on heels, or walking on toes, or normal walking.
            </p>

            <h4 className="mt-20 text-xl text-white/50"><span className="font-semibold text-white/90">Tech Stack </span>: Processing, Arduino C++</h4>

            <h4 className="mt-10 text-xl text-white/90 font-semibold">Hardware</h4>
            <ul className="list-disc mt-4 list-inside space-y-2 text-white/50">
              {SmartShoeHardware.slice(0, SmartShoeHardware.length ).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            
            <h4 className="mt-20 text-xl text-white/90 font-semibold">Design Criteria</h4>
            <ul className="list-disc mt-4 list-inside space-y-2 text-white/50">
              {SmartShoeDesignCriteria.slice(0, SmartShoeDesignCriteria.length ).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>            

            <h4 className="mt-20 text-xl text-white/90 font-semibold">Evaluation</h4>
            <p className="mt-2 text-xl text-white/50">
              Preliminary testing using squats and lunges across multiple users showed that EMG sensors detected hamstring activation within 50 milliseconds, FSR readings distinguished balanced vs. forward-leaning postures, and accelerometers consistently tracked trunk angle. The system accurately identified poor form in 84% of misaligned trials and delivered corrective feedback based on sensor thresholds and movement patterns.
            </p>
          </div>

          <div className="mt-5 relative aspect-[5/10] overflow-hidden rounded-[12px] flex justify-center">
            <img
              src="/biomed_devices/p3_vert.png"
              alt="MotionSense prototype"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <Line/>

        {/* SparkBeat */}
         <div className="mt-40 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10">
          <div>
            <h3 className="mt-2 text-4xl font-bolder">
              SparkBeat - Smart Heartrate and Blood Oxygenation Wristband
            </h3>
            <h4 className="mt-20 text-xl text-white/90 font-semibold">Context</h4>
            <p className="mt-2 text-xl text-white/50">
            Measures heart rates and blood oxygen saturation (SpO2), providing insights into the wearer's cardiovascular health.
            </p>

            <h4 className="mt-20 text-xl text-white/50"><span className="font-semibold text-white/90">Tech Stack </span>: React.js, Tailwind CSS, Node.js, Arduino C++</h4>

            <h4 className="mt-10 text-xl text-white/90 font-semibold">Hardware</h4>
            <ul className="list-disc mt-4 list-inside space-y-2 text-white/50">
              {MotionSenseHardware.slice(0, MotionSenseHardware.length ).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            
            <h4 className="mt-20 text-xl text-white/90 font-semibold">Design Criteria</h4>
            <ul className="list-disc mt-4 list-inside space-y-2 text-white/50">
              {MotionSenseDesCriteria.slice(0, MotionSenseDesCriteria.length ).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            
            <h4 className="mt-20 text-xl text-white/90 font-semibold">Evaluation</h4>
            <p className="mt-2 text-xl text-white/50">
              Preliminary testing using squats and lunges across multiple users showed that EMG sensors detected hamstring activation within 50 milliseconds, FSR readings distinguished balanced vs. forward-leaning postures, and accelerometers consistently tracked trunk angle. The system accurately identified poor form in 84% of misaligned trials and delivered corrective feedback based on sensor thresholds and movement patterns.
            </p>
          </div>

          <div className="mt-5 relative aspect-[6/10] overflow-hidden rounded-[12px] flex justify-center">
            <img
              src="/biomed_devices/p4_vert.png"
              alt="MotionSense prototype"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <Line/>

        {/* SparkBeat 2 */}
        <div className="mt-40 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10">
          <div>
            <h3 className="mt-2 text-4xl font-bolder">
              SparkBeat 2 - Wearable Sport Band
            </h3>
            <h4 className="mt-20 text-xl text-white/90 font-semibold">Context</h4>
            <p className="mt-2 text-xl text-white/50">
            This project collects clean ECG signals from the patient’s heart and measure respiratory rate through analyzing resistance changes when the patient exhales and inhales.
            </p>

            <h4 className="mt-20 text-xl text-white/50"><span className="font-semibold text-white/90">Tech Stack </span>: Processing, Arduino C++</h4>

            <h4 className="mt-10 text-xl text-white/90 font-semibold">Hardware</h4>
            <ul className="list-disc mt-4 list-inside space-y-2 text-white/50">
              {Sparkbeat2Hardware.slice(0, Sparkbeat2Hardware.length ).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            
            <h4 className="mt-20 text-xl text-white/90 font-semibold">Design Criteria</h4>
            <ul className="list-disc mt-4 list-inside space-y-2 text-white/50">
              {Sparkbeat2DesignCriteria.slice(0, Sparkbeat2DesignCriteria.length ).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            
            <h4 className="mt-20 text-xl text-white/90 font-semibold">Evaluation</h4>
            <p className="mt-2 text-xl text-white/50">
              The sportbands accurately captured ECG signals, with heart rate measurements within 3 bpm of clinical-grade monitors. Respiratory rate detection showed 95% accuracy in controlled breathing tests. Users reported the band was comfortable for extended wear, and the adjustable strap ensured a secure fit during physical activity.
            </p>
          </div>

          <div className="mt-5 relative aspect-[5/12] overflow-hidden rounded-[12px] flex justify-center">
            <img
              src="/biomed_devices/p2_vert.png"
              alt="MotionSense prototype"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <Line/>

        <div className="mt-40 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10">
          <div>
            <h3 className="mt-2 text-4xl font-bolder">
              TikTok Tattoo - Interactive Tattoos 
            </h3>
            <h4 className="mt-20 text-xl text-white/90 font-semibold">Context</h4>
            <p className="mt-2 text-xl text-white/50">
              Tiktok Tattoo is a smart tattoo that allows users to control external devices such as TikTok on Web with a simple swipe on your skin.
            </p>

            <h4 className="mt-20 text-xl text-white/50"><span className="font-semibold text-white/90">Tech Stack </span>: Processing, Python, Arduino C++</h4>

            <h4 className="mt-10 text-xl text-white/90 font-semibold">Hardware</h4>
            <ul className="list-disc mt-4 list-inside space-y-2 text-white/50">
              <li>
                MPR121 Breakout Board: Relies on capacitive sensor to detect touches. When a capacitive sensor (electrode) is touched, the total sensed capacitance changes. When the finger makes contact with the electrode, this shift in capacitance signals a touch event.
              </li>
            </ul>
            
            <h4 className="mt-20 text-xl text-white/90 font-semibold">Design Criteria</h4>
            <ul className="list-disc mt-4 list-inside space-y-2 text-white/50">
              {MotionSenseDesCriteria.slice(0, MotionSenseDesCriteria.length ).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            
            <h4 className="mt-20 text-xl text-white/90 font-semibold">Evaluation</h4>
            <p className="mt-2 text-xl text-white/50">
              The tattoo reliably detected swipe gestures and touch inputs, allowing users to seamlessly scroll through TikTok videos with a simple finger movement. The integration with TikTok on Web was smooth, enabling users to control video playback without any noticeable lag or delay.
            </p>
          </div>


          <div className="flex flex-col gap-10 mt-5 relative aspect-[5/10] overflow-hidden rounded-[12px] flex justify-center">
            <video
              src={'/biomed_devices/Tiktok_demo.mp4'}
              controls
            />
            <img
              src="/biomed_devices/p5.png"
              alt="MotionSense prototype"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

    


        {/* Process Section */}
        <h3 className="text-white text-6xl font-bold mt-60">Creating the MVP</h3>
        <h3 className="mt-20 text-2xl font-semibold">
          Step 1 - Inspiration and Discovery
        </h3>
        <p className="mt-10 text-sm text-white/50 max-w-4xl leading-relaxed text-xl">
          Establishing a vision and core values were key to WorldNotes's design. Prioritizing pictorial communication and geolocated discoveries offers a quirky nuance and emotional depth in social interactions that is yet to be explored. 
          The challenge became: <span className="italic text-white/90"> how can we design a user friendly, universal platform that inspires creativity? </span>
        
        <br/><br/>
        WorldNotes is deeply informed by a blend of <span className="font-bolder text-white">internet culture </span>, mapping tools, and communal creativity platforms. Here a few places of inspiration I pulled from:
        </p>
        
        <div className="mt-8 flex flex-wrap gap-6 justify-center w-full">
          {tech.map((inspo, idx) => (
            <div
            key={idx}
            className="flex flex-col text-left items-start bg-[#1f1f1f] border border-white/10 rounded-xl p-6 min-w-[220px] max-w-xs flex-1"
            >
            <h5 className="text-lg font-bolder text-white/90 mb-4">{inspo}</h5>
            <p className="text-sm text-white/50">{techDescriptions[idx]}</p>
            </div>
          ))}
        </div>

        {/* <p className="font-semibold text-white mt-20">The Result</p>
        <p className="text-sm text-white/70 max-w-2xl mt-2 text-xl">
          The result is a creative world explorer that is part map, part sketchbook, part message board. WorldNotes transforms the act of scrolling into a playful exploration of what people leave behind, visually bridging global
        </p> */}

        <Line/>


        <h3 className="mt-40 text-2xl font-semibold">
          Step 2 - Building Community
        </h3>
        <p className="mt-10 text-xl text-white/70 max-w-2xl">
          I wanted to encourage exploration rather than passive scrolling. Notes are anchored to geolocations, giving users a sense of discovery and adventure. 
          This fosters micro-communities, clusterings of ideas tied not just to people but to locations and a shared experience. 
          This creative freedom thus opens the platform up to a diverse user base of different backgrounds and interests and creates a spontaneous element towards finding new communities.
        </p>

        <Line/>


        <h3 className="mt-40 text-2xl font-semibold">
          Step 3 - Designing App Structure
        </h3>
        <p className="mt-10 text-xl text-white/70 max-w-4xl">
        With the vision set, I focused on structuring the app. 
        There's a diverse set of unique user flows I had to consider: note traversal and browsing, the note creation process, etc., so I decided to map the app structure 
        out. This helped me visualize all users navigation routes between different sections, ensuring a logical flow and helping plan the uer flow web development. 
        </p>
        <div className=" mt-10 relative aspect-[21/12] overflow-hidden rounded-[12px]">
          <img
            src={"/worldnotes/user_flow.png"}
            alt={`Flowchart of Webflow`}
            className="absolute inset-0 h-full w-full object-cover cursor-pointer"
            onClick={() => setShowPopup(true)}
          />
          {AppStructPopup && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                onClick={() => setShowPopup(false)}
            >
              <img
                src={"/worldnotes/user_flow.png"}
                alt={`App Structure Enlarged`}
                className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
                onClick={e => e.stopPropagation()}
              />
            </div>
          )}
        </div>

        <Line/>

        <h3 className="mt-40 text-2xl font-bold">
          Step 4 - Wireframing
        </h3>
        <p className="mt-10 text-xl text-white/70 max-w-4xl">
          I sketched out how key features like the user profile, community page, and subsequent news and updates page would look and interact. 
          Early iterations helped me find balance between clean and simpler layouts and a stylized scrap book layout without over-investing in visuals too soon.
        </p>
        <div className="mt-10 relative aspect-[21/8] overflow-hidden rounded-[12px]">
          <img
            src={"/worldnotes/wireframing.png"}
            alt={`Wireframe`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-center text-white/50">Wireframes of User Profile and Community Page</p>
        </div>    
        
        <Line/>
        
        <h3 className="mt-40 text-2xl font-semibold">
          Step 5 - UI Design
        </h3>
        <p className="mt-10 text-xl text-white/70 max-w-4xl">
        After validating layouts, I shifted to creating a formal visual design of components using Figma and Illustrator. 
        WorldNote's branding embraces playfulness, bright accents, references scrapbooking, and a lighthearted aesthetic—to reflect the project’s creative spirit. 
        The UI is intentionally inviting, encouraging hesitant users to leave their mark on the world.
        </p>

        <div className="mt-10 ml-10 flex flex-col text-left items-start bg-[#1f1f1f] border border-white/10 rounded-xl p-6 ">
          <h4 className=" font-semibold">
            Creating An Ecosystem
          </h4>
          <p className="mt-2 max-w-4xl text-xl text-white/70">
            A consistent design system ensures the interface feels cohesive and visually unified, giving every interaction from map navigation to note creation a recognizable identity.
            <br/><br/>
            Beyond text, the platform already supports layering, doodles, and spatial note placement, but the foundation  is intentionally <span className="font-bold"> scalable </span>. The note creator is built to grow, opening possibilities like animated notes, music attachments, borders, or stickers, expanding the ways users can express themselves. By treating design as both a system and a playground, WorldNotes sets the foundation for a platform that can evolve alongside its community’s creativity.
          </p>
        </div>

        <div className=" mt-10 relative aspect-[21/9] overflow-hidden rounded-[12px]">
          <img
            src={"/worldnotes/wireframing.png"}
            alt={`UI Design`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <Line/>

        <h3 className="mt-40 text-2xl font-semibold">
          Step 6 - Beginning Fullstack Development
        </h3>
        <p className="mt-2 text-xl text-white/70 max-w-4xl">
          After designing all necessary UI components, I assembled a tech stack and begain implementing the vision: </p>
      
           
        <div className=" mt-5 relative aspect-[21/9] overflow-hidden rounded-[12px]">
          <img
            src={"/worldnotes/ui_design.png"}
            alt={`UI Design`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <Line/> 
        
        <h3 className="mt-10 text-2xl font-semibold">
          Step 7 - Measuring Impact
        </h3>
        <p className="mt-2 text-xl text-white/70 max-w-4xl">
          Because WorldNotes is experimental, impact is measured less in metrics and more in moments of connection; however there are community polls that are posted to survey users on the site’s updates. Over time, I plan to introduce lightweight analytics and community feedback loops to guide future iterations.
        </p>
        <div className=" mt-5 relative aspect-[21/9] overflow-hidden rounded-[12px]">
          <img
            src={"/panorama_kitchen.png"}
            alt={`Engagement Metrics`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

      </div>
    </section>

    );
}