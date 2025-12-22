
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";


function BiomedProjectsTabs() {
  const [active, setActive] = useState<TabKey>("motionsense");
  type TabKey = "motionsense" | "sparkbeat2" | "sparkbeat" | "smartshoe" | "tiktok";
    
    const TABS: { key: TabKey; label: string }[] = [
      { key: "motionsense", label: "MotionSense" },
      { key: "sparkbeat2",  label: "SparkBeat 2" },
      { key: "sparkbeat",   label: "SparkBeat" },
      { key: "smartshoe",   label: "Smart Shoe" },
      { key: "tiktok",      label: "TikTok Tattoo" },
    ];

    const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

    const fadeSlide: Variants = {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      exit: { opacity: 0, y: -16, transition: { duration: 0.35, ease: EASE } },
    };

    const MotionSenseHardware = [
    "MIKROE EMG Click: Placed on the hamstrings to detect electrical activity during muscle engagement.",
    "FSR (Force Sensitive Resistor Sensors): Embedded into shoe insoles to measure foot pressure distribution (toe, heel, lateral, medial).",
    "MPU6050 Accelerometer: Tracks lower back posture and chest angulation.",
    "FIREBEETLE BOARD-32P BLE 4.1: Provides Bluetooth device capabilities.",
    "18650 Li-Ion Battery: Powers the device for up to 8 hours of use.",
  ];

  const MotionSenseDesCriteria = [
    "Shoe insole for FSR sensors.",
    "Thigh strap houses EMG sensors.",
    "Waistband clip contains the FireBeetle board, accelerometer, and battery.",
    "Must display real-time angle of hip hinge",
    "Heat maps, balance feedback, and voltage over time graphs from each insole FSR",
    "Visualize hamstring engagement",
    "Create an assistive target form interface"
  ];

  const SparkBeatHardware = [
    "Sparkfun Pulse Oximeter and Heart Rate Monitor (MAX30101 & MAX32664)",
    "FireBeetle Board-328P with BLE4.1",
    "18650 Li-Ion Battery",
    "Photoplethysmogram (PPG) Sensors",
    "Stress indicative buzzer"
  ];

  const SparkBeatDesCriteria = [
    "Real-time Heart Rate and Blood Oxygenation Monitoring",
    "Comfortable Wristband Design",
    "Stress Detection and Alerts",
    "Heart Rate Over Time Visualization",
    "Cardio Zone Indicators",
  ];

  const Sparkbeat2Hardware = [
    "FireBeetle Board-328P with BLE4.1 x 2", "FireBeetle Proto Board", "AD8232 Heart Monitor", "ECG leads", "Snap-On ECG electrodes", "Force Sensitive Resistors (FSR)"
  ];

  const Sparkbeat2DesignCriteria = [
    "Fitness, Stress, and Meditation Modes",
    "Real-time Heart Rate and Respiratory Rate Monitoring",
    "Cardio Zone Indicators",
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
    "Display a real-time heatmap of the foot's pressure points",
    "Graph the voltage over time of each FSR",
  ];

  const TikTokHardware = [
    "FireBeetle Board-328P with BLE4.1: Provides Bluetooth device capabilities.",
    "MPR 121 Breakout Board: Relies on capacitive sensor to detect touches.",
    "18650 Li-Ion Battery: Powers the device for up to 8 hours of continuous use.",
  ];

  const TikTokDesCriteria = [
    "12 capacitive sensors",
    "Vinyl base",
    "Copper tape connections to link electrodes to the MPR121 board",
    "Clear interface to display touch interactions",
  ];

  return (
    <section className="mt-40">
      {/* Option buttons (tabs) */}
      <div
        role="tablist"
        aria-label="Biomedical projects"
        className="flex w-full mb-5 justify-center text-black"
      >
        <div className="flex justify-center p-1 md:p-2 rounded-full md:gap-2 gap-1 overflow-x bg-white border border-black">
        {TABS.map(({ key, label }) => {
          const selected = active === key;
          return (
            <button
              key={key}
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${key}`}
              onClick={() => setActive(key)}
              className={[
                "rounded-full md:px-8 px-4 py-1 md:py-3 text-[10px] md:text-sm font-medium",
                "transition-colors ease-out", 
                selected
                  ? "bg-black text-white "
                  : "bg-white hover:bg-black/5 "
              ].join(" ")}
            >
              {label}
            </button>
          );
        })}
        </div>
      </div>

      <div className="bg-white rounded-2xl text-black px-4 sm:px-6 md:px-10 pl-6 md:pl-16 py-6 md:py-10  border border-black">
        {/* Animated panel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {active === "motionsense" && (
              <motion.div
                key="motionsense"
                id="panel-motionsense"
                role="tabpanel"
                aria-labelledby="tab-motionsense"
                variants={fadeSlide}
                initial="initial"
                animate="animate"
                exit="exit"
                className="origin-top"
              >
                {/* === MotionSense content (your original markup) === */}
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10">
                  <div>
                    <h3 className="mt-2 text-4xl">
                      MotionSense — A Wearable System for Real-Time Assessment of Lower Body Form and Muscle Engagement During Exercise
                    </h3>

                    <h4 className="mt-20 text-xl text-black font-semibold">Context</h4>
                    <p className="mt-2 text-xl text-black/75">
                      Poor exercise form, especially during lower body workouts like squats and deadlifts, can lead to long-term injuries and chronic back issues. Without real-time feedback, subtle mistakes often go unnoticed.
                      <br /><br />
                      MotionSense is a wearable multi-sensor system that monitors lower back posture, hamstring activation, and foot pressure, providing corrective insights that reduce injury and improve training effectiveness.
                    </p>

                    <h4 className="mt-10 text-xl text-black/75">
                      <span className="font-semibold text-black">Tech Stack </span>: React.js, Tailwind CSS, Node.js, Arduino C++
                    </h4>

                    <h4 className="mt-10 text-xl text-black font-semibold">Hardware</h4>
                    <ul className="list-disc mt-4 text-sm pl-6 space-y-2 text-black/75">
                      {MotionSenseHardware.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    <h4 className="mt-10 text-xl text-black font-semibold">Design Criteria</h4>
                    <ul className="list-disc mt-4 text-sm pl-6 space-y-2 text-black/75">
                      {MotionSenseDesCriteria.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    <h4 className="mt-10 text-xl text-black font-semibold">Evaluation</h4>
                    <p className="mt-2 text-xl text-black/75">
                      Preliminary testing using squats and lunges across multiple users showed that EMG sensors detected hamstring activation within 50 milliseconds, FSR readings distinguished balanced vs. forward-leaning postures, and accelerometers consistently tracked trunk angle. The system accurately identified poor form in 84% of misaligned trials and delivered corrective feedback based on sensor thresholds and movement patterns.
                    </p>
                  </div>

                  <div className="relative mt-5 md:mt-0 aspect-[4/12] overflow-hidden flex justify-center">
                    <motion.div
                      variants={fadeSlide}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <div className="flex flex-col">
                      <div className=" mt-5 mx-10 relative aspect-[26/14] overflow-hidden">
                          <video
                              src={`${import.meta.env.BASE_URL}/biomed_devices/motionSense.mp4`}
                              loop
                              autoPlay
                              muted
                          />
                      </div>
                      <img
                        src={`${import.meta.env.BASE_URL}/biomed_devices/p1.png`}
                        alt="MotionSense prototype"
                        className="object-cover w-full h-full mt-4"
                      />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* <Line /> */}
              </motion.div>
            )}

            {active === "sparkbeat2" && (
              <motion.div
                key="sparkbeat2"
                id="panel-sparkbeat2"
                role="tabpanel"
                aria-labelledby="tab-sparkbeat2"
                variants={fadeSlide}
                initial="initial"
                animate="animate"
                exit="exit"
                className="origin-top"
              >
                {/* === SparkBeat 2 content === */}
                <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10">
                  <div>
                    <h3 className="mt-2 text-4xl">SparkBeat 2 — Wearable Sport Chest Band for Respiratory and Heart Rate Analysis</h3>

                    <h4 className="mt-20 text-xl text-black font-semibold">Context</h4>
                    <p className="mt-2 text-xl text-black/75">
                      This project collects clean ECG signals from the patient’s heart and measure respiratory rate through analyzing resistance changes when the patient exhales and inhales.
                    </p>

                    <h4 className="mt-10 text-xl text-black/75">
                      <span className="font-semibold text-black">Tech Stack </span>: Processing, Arduino C++
                    </h4>

                    <h4 className="mt-10 text-xl text-black font-semibold">Hardware</h4>
                    <ul className="list-disc mt-4 text-sm pl-6 space-y-2 text-black/75">
                      {Sparkbeat2Hardware.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    <h4 className="mt-10 text-xl text-black font-semibold">Design Criteria</h4>
                    <ul className="list-disc mt-4 text-sm pl-6 space-y-2 text-black/75">
                      {Sparkbeat2DesignCriteria.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    <h4 className="mt-10 text-xl text-black font-semibold">Evaluation</h4>
                    <p className="mt-2 text-xl text-black/75">
                      The sport bands accurately captured ECG signals, with heart rate measurements within 3 bpm of clinical-grade monitors. Respiratory rate detection showed 95% accuracy in controlled breathing tests. Users reported the band was comfortable for extended wear, and the adjustable strap ensured a secure fit during physical activity.
                    </p>
                  </div>

                  <div className="relative mt-5 md:mt-0 aspect-[5/12] overflow-hidden rounded-[12px] flex justify-center">
                    <motion.img
                      src={`${import.meta.env.BASE_URL}/biomed_devices/p2_vert.png`}
                      alt="SparkBeat 2 prototype"
                      className="object-cover w-full h-full"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1, transition: { duration: 0.45 } }}
                    />
                  </div>
                </div>

                {/* <Line /> */}
              </motion.div>
            )}

            {active === "sparkbeat" && (
              <motion.div
                key="sparkbeat"
                id="panel-sparkbeat"
                role="tabpanel"
                aria-labelledby="tab-sparkbeat"
                variants={fadeSlide}
                initial="initial"
                animate="animate"
                exit="exit"
                className="origin-top"
              >
                {/* === SparkBeat content === */}
                <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10">
                  <div>
                    <h3 className="mt-2 text-4xl">SparkBeat — Smart Stress, Heart Rate, and Blood Oxygenation Tracking Wristband</h3>

                    <h4 className="mt-20 text-xl text-black font-semibold">Context</h4>
                    <p className="mt-2 text-xl text-black/75">
                      Measures heart rates and blood oxygen saturation (SpO2), providing insights into the wearer's cardiovascular health.
                    </p>

                    <h4 className="mt-10 text-xl text-black/75">
                      <span className="font-semibold text-black">Tech Stack </span>: Processing, Arduino C++
                    </h4>

                    <h4 className="mt-10 text-xl text-black font-semibold">Hardware</h4>
                    <ul className="list-disc mt-4 text-sm pl-6 space-y-2 text-black/75">
                      {SparkBeatHardware.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    <h4 className="mt-10 text-xl text-black font-semibold">Design Criteria</h4>
                    <ul className="list-disc mt-4 text-sm pl-6 space-y-2 text-black/75">
                      {SparkBeatDesCriteria.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    <h4 className="mt-10 text-xl text-black font-semibold">Evaluation</h4>
                    <p className="mt-2 text-xl text-black/75">
                      Testing with multiple users showed that the SparkBeat wristband accurately measured heart rate within 2 bpm of clinical-grade monitors and SpO2 levels within 2% accuracy. Stress was successfully detected, identifying and alerting elevated heart rates during simulated stress tests.
                    </p>
                  </div>

                  <div className="relative mt-5 md:mt-0 aspect-[6/10] overflow-hidden rounded-[12px] flex justify-center">
                    <motion.img
                      src={`${import.meta.env.BASE_URL}/biomed_devices/p4_vert.png`}
                      alt="SparkBeat prototype"
                      className="object-cover w-full h-full"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1, transition: { duration: 0.45 } }}
                    />
                  </div>
                </div>

                {/* <Line /> */}
              </motion.div>
            )}

            {active === "smartshoe" && (
              <motion.div
                key="smartshoe"
                id="panel-smartshoe"
                role="tabpanel"
                aria-labelledby="tab-smartshoe"
                variants={fadeSlide}
                initial="initial"
                animate="animate"
                exit="exit"
                className="origin-top"
              >
                {/* === Smart Shoe content === */}
                <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10">
                  <div>
                    <h3 className="mt-2 text-4xl">Smart Shoe — Insole for Motion, Balance, and Gait Analysis</h3>

                    <h4 className="mt-20 text-xl text-black font-semibold">Context</h4>
                    <p className="mt-2 text-xl text-black/75">
                      Good gait is important for maintaining balance, coordination, and mobility, which reduces the risk of injuries and falls. Smart Shoe is a shoe insole with force sensors and accelerometers to analyze the user’s real-time walk patterns. Our device informs the user which part of the foot they use more while walking through a heatmap. Example: Walking on heels, or walking on toes, or normal walking.
                    </p>

                    <h4 className="mt-10 text-xl text-black/75">
                      <span className="font-semibold text-black">Tech Stack </span>: Processing, Arduino C++
                    </h4>

                    <h4 className="mt-10 text-xl text-black font-semibold">Hardware</h4>
                    <ul className="list-disc mt-4 text-sm pl-6 space-y-2 text-black/75">
                      {SmartShoeHardware.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    <h4 className="mt-10 text-xl text-black font-semibold">Design Criteria</h4>
                    <ul className="list-disc mt-4 text-sm pl-6 space-y-2 text-black/75">
                      {SmartShoeDesignCriteria.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    <h4 className="mt-10 text-xl text-black font-semibold">Evaluation</h4>
                    <p className="mt-2 text-xl text-black/75">
                      Testing with multiple users showed that the Smart Shoe accurately identified gait patterns, distinguishing between heel-strike, toe-strike, and flat-footed walking with 92% accuracy. The heatmap visualization effectively highlighted pressure distribution, allowing users to adjust their walking form based on real-time feedback.
                    </p>
                  </div>

                  <div className="relative mt-5 md:mt-0 aspect-[4/10] overflow-hidden flex justify-center">
                    <motion.img
                      src={`${import.meta.env.BASE_URL}/biomed_devices/p3_vert.png`}
                      alt="Smart Shoe prototype"
                      className="object-cover w-full h-full"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1, transition: { duration: 0.45 } }}
                    />
                  </div>
                </div>

                {/* <Line /> */}
              </motion.div>
            )}

            {active === "tiktok" && (
              <motion.div
                key="tiktok"
                id="panel-tiktok"
                role="tabpanel"
                aria-labelledby="tab-tiktok"
                variants={fadeSlide}
                initial="initial"
                animate="animate"
                exit="exit"
                className="origin-top"
              >
                {/* === TikTok Tattoo content === */}
                <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10">
                  <div>
                    <h3 className="mt-2 text-4xl">TikTok Tattoo — Interactive Tattoos</h3>

                    <h4 className="mt-10 text-xl text-black font-semibold">Context</h4>
                    <p className="mt-2 text-xl text-black/75">
                      As digital and physical worlds continue to merge, people are increasingly seeking playful and new ways to interact with technology. 
                      Tiktok Tattoo is a smart tattoo that explores the idea of skin-based interfaces and gives you the ability to control TikTok Web with just your skin.
                    </p>

                    <h4 className="mt-10 text-xl text-black/75">
                      <span className="font-semibold text-black">Tech Stack </span>: Processing, Python, Arduino C++
                    </h4>

                    <h4 className="mt-10 text-xl text-black font-semibold">Hardware</h4>
                    <ul className="list-disc mt-4 text-sm pl-6 space-y-2 text-black/75">
                      {TikTokHardware.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    <h4 className="mt-10 text-xl text-black font-semibold">Design Criteria</h4>
                    <ul className="list-disc mt-4 text-sm pl-6 space-y-2 text-black/75">
                      {TikTokDesCriteria.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    <h4 className="mt-10 text-xl text-black font-semibold">Evaluation</h4>
                    <p className="mt-2 text-xl text-black/75">
                      The tattoo reliably detected swipe gestures and touch inputs, allowing users to scroll through TikTok videos with ease. Integration with TikTok Web was smooth, enabling users to control video playback without any noticeable lag or delay.
                    </p>
                  </div>

                  <div className="flex mt-10 md:mt-0 flex-col gap-5 relative aspect-[5/10] overflow-hidden justify-center">
                    <motion.video
                      src={`${import.meta.env.BASE_URL}/biomed_devices/Tiktok_demo.mp4`}
                      className="object-cover w-full h-full px-10 rounded-[12px]"
                      muted
                      autoPlay
                      loop
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1, transition: { duration: 0.45 } }}
                    />
                    <motion.img
                      src={`${import.meta.env.BASE_URL}/biomed_devices/p5.png`}
                      alt="TikTok tattoo prototype"
                      className="object-cover w-full h-full"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1, transition: { duration: 0.45, delay: 0.05 } }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default function Biomed() {

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

  const tech = [
    'Processing',
    'React + Node.js + TailwindCSS',
    'Figma',
    'Arduino',
    "Python",
    '3D Printing',
  ];

  const techDescriptions = [
    'Processing is a visual programming environment used for creative coding, interactive graphics, and generative art.',
    'A modern full-stack web development stack. React powers dynamic UIs, Node.js handles backend logic and APIs, and TailwindCSS enables rapid, responsive interface styling.',
    'A collaborative design tool for creating user interfaces, prototypes, and design systems with real-time feedback.',
    'An open-source electronics platform based on easy-to-use hardware and software, ideal for building interactive projects and prototypes.',
    'A versatile programming language known for its simplicity and readability, widely used in data analysis, machine learning, web development, and automation.',
    'A manufacturing process that creates three-dimensional objects by layering materials based on digital models, enabling rapid prototyping and custom designs.',
  ];

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-8 mb-40">

        <div className="flex flex-col items-center justify-center">
          <p className="mt-5 text-md md:text-xl text-center text-white/50 max-w-2xl">
            Empowering individuals in digital health, fitness, assistive, medical, and rehabilitation to monitor their health.
          </p>
        </div>

        <section className="mt-32">
          <div className="w-full h-full px-6">
            <div className="rounded-xl border border-white/15 bg-black p-6 pb-10">
              <h3 className="font-nhgDisplay text-xl mb-4 text-white">Key Features</h3>
              <div className="grid grid-cols-1 gap-2 md:gap-8 md:grid-cols-2">
                <ul className="list-disc list-inside space-y-2 text-white/90">
                  {features.slice(0, Math.ceil(features.length / 2)).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <ul className="list-disc list-inside space-y-2 text-white/90">
                  {features.slice(Math.ceil(features.length / 2)).map((feature, idx) => (
                    <li key={idx + Math.ceil(features.length / 2)}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <BiomedProjectsTabs />

        {/* Process Section */}
        <div className="max-w-6xl px-4 flex flex-col">
        <h3 className="text-6xl mt-60">The Process</h3>
        <h3 className="mt-20 text-4xl ">
          Understanding Technologies
        </h3>
        <p className="mt-5 text-sm text-black/75 max-w-4xl leading-relaxed text-xl">
          Before participating in this lab, I had limited experience with biomedical device design nor engineering in general. 
          Through these projects, I gained hands-on experience in sensor integration, hardware engineering, data acquisition, UI/UX design, frontend development, and real-time monitoring.
          The following tools were instrumental in bringing the various biomedical devices to life:
        </p>
        
        <div className="mt-12 md:px-20 flex flex-wrap gap-6 justify-center w-full">
          {tech.map((inspo, idx) => (
            <div
            key={idx}
            className="flex flex-col text-left items-start bg-[#1f1f1f] border border-white/10 rounded-xl p-6 min-w-[220px] min-h-[220px] max-w-xs flex-1"
            >
            <h5 className="text-lg font-bolder text-white/90 mb-2">{inspo}</h5>
            <p className="text-sm text-white/75">{techDescriptions[idx]}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-40 text-4xl ">
          The Development Cycle
        </h3>
        <p className="mt-5 text-sm text-black/50 max-w-4xl leading-relaxed text-xl">
          Each device followed a similar development cycle, beginning with research on existing biomedical wearables and sensor solutions to gain insight on product and app design. Then followed conceptualizing, diagraming, low fidelity prototyping and UI designs, final construction, testing, and final review.
        </p>
        <h3 className="mt-20 text-3xl">
          Prototyping
        </h3>
        <p className="mt-4 text-sm text-black/50 max-w-4xl leading-relaxed text-xl">
          Sketches of physical device designs and UI were made followed by circuit diagrams to plan hardware integration and creating low-fidelity prototypes to test sensor response, placements, and data acquisition. UI assets were initially designed in Figma then finalized in Illustrator and Photoshop.
        </p>

        <div className="flex justify-center">
          <div className="max-w-5xl w-full px-4 lg:px-40">
            <div className="mt-10 relative aspect-[23/12] overflow-hidden rounded-t-lg">
              <img
                src={`${import.meta.env.BASE_URL}/biomed_devices/circuit_diagram.png`}
                alt={`Circuit Diagram`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex justify-center bg-black rounded-b-lg py-6">  
              <p className="text-center text-base text-white">MotionSense Circuit Diagram</p>
            </div>   
          </div>
        </div> 

        <h3 className="mt-40 text-4xl ">
          Reflection and Designing for Health
        </h3>
        <p className="mt-5 text-xl text-black/75 max-w-4xl">
          I found that the most important step in designing these devices was grasping a strong understanding of the patients' specific needs and overall health goals. Learning about the nuances and difficulties a variety of patients face when managing personal health devices and apps was key in ensuring compassionate designs. 
          It was very important to prioritized clarity, accessibility, and comfort as displaying biometric data can often be non-intuitive, confusing, and overwhelming. 
          Researching existing health monitoring UIs helped to identify effective hierarchy of information and the importance of clear labeling and soft visuals. 
        </p>

      </div>
      </div>
    </section>

    );
}