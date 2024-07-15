import "./AddictionPage.css";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
// import ByTheBookStatement from "../../components/MissionStatement/BytheBookStatement.js"

function AddictionPage() {
    return (
        <main>
            <Navbar />
            <section id="title-wrapper">
                <h1 id="main-title" className="text-css">Get help with your addiction</h1>
                <p id="title-paragraph" className="text-css">If you or someone you know is concerned about gambling habits or shows signs of gambling addiction, seeking professional help and support is crucial. Many resources and organizations provide assistance for individuals struggling with gambling-related issues. Getting help with gambling addiction involves recognizing the problem, seeking professional support, and accessing resources designed to assist in recovery. Here are steps to take:</p>
            </section>
            <section>
                <h2>Recognize the Problem</h2>
                <ol>
                    <li><h3>Acknowledge the Issue:</h3> Admit to yourself that gambling is causing significant problems in your life.</li>
                    <li><h3>Understand the Signs:</h3> Be aware of common signs such as financial troubles, neglecting responsibilities, and emotional distress related to gambling.</li>
                </ol>
            </section>
            <section>
                <h2>Seek Professional Help</h2>
                <ol>
                    <li><h3>Therapists and Counselors:</h3>
                        <ul>
                            <li>Look for a therapist who specializes in addiction, particularly gambling addiction.</li>
                            <li>Cognitive-behavioral therapy (CBT) is often effective for treating gambling addiction.</li>
                        </ul>
                    </li>
                    <li>Support Groups:
                        <ul>
                            <li>Join support groups such as Gamblers Anonymous (GA), which provide peer support and a 12-step program.</li>
                        </ul>
                    </li>
                    <li><h3>Medical Assistance:</h3>
                        <ul>
                            <li>Consult a doctor or psychiatrist, especially if there are co-occurring mental health issues like depression or anxiety.</li>
                            <li>Medications may be prescribed to help with underlying issues or to reduce the urge to gamble.</li>
                        </ul>
                    </li>
                </ol>
            </section>
            <section>
                <h2>Utilize Resources</h2>
                <ol>
                    <li><h3>Helplines and Hotlines:</h3>
                        <ul>
                            <li>National Helpline for Gambling Addiction: Call 1-800-522-4700 (USA).</li>
                        </ul>
                    </li>
                    <li><h3>Online Resources:</h3>
                        <ul>
                            <li>Visit websites like the National Council on Problem Gambling (NCPG) for information and resources.</li>
                        </ul>
                    </li>
                    <li><h3>Self-Help Books and Guides:</h3>
                        <ul>
                            <li>Read books and guides on overcoming gambling addiction to educate yourself and gain strategies for recovery.</li>
                        </ul>
                    </li>
                </ol>
            </section>
            <Footer />
        </main>
    );
}

export default AddictionPage;
