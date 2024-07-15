import "./AddictionPage.css";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import ByTheBookStatement from "../../components/MissionStatement/BytheBookStatement.js"

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
                    <li><h3>Support Groups:</h3>
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
            <section>
                <h2>Implement Practical Steps</h2>
                <ol>
                    <li><h3>Financial Management:</h3>
                        <ul>
                            <li>Have someone you trust manage your finances.</li>
                            <li>Set limits on cash and credit access.</li>
                        </ul>
                    </li>
                    <li><h3>Self-Exclusion Programs:</h3>
                        <ul>
                            <li>Sign up for self-exclusion programs that ban you from entering gambling venues or accessing online gambling sites.</li>
                        </ul>
                    </li>
                    <li><h3>Blocking Software:</h3>
                        <ul>
                            <li>Install software that blocks access to online gambling sites on your devices.</li>
                        </ul>
                    </li>
                </ol>
            </section>
            <section>
                <h2>Build a Support Network</h2>
                <ol>
                    <li><h3>Family and Friends:</h3>
                        <ul>
                            <li>Talk to family and friends about your problem and ask for their support.</li>
                        </ul>
                    </li>
                    <li><h3>Accountability Partner:</h3>
                        <ul>
                            <li>Find an accountability partner who can help monitor your progress and offer encouragement.</li>
                        </ul>
                    </li>
                </ol>
            </section>
            <section>
                <h2>Adopt Healthy Lifestyle Changes</h2>
                <ol>
                    <li><h3>Alternative Activities:</h3>
                        <ul>
                            <li>Engage in hobbies and activities that you enjoy and that keep you away from gambling.</li>
                        </ul>
                    </li>
                    <li><h3>Stress Management:</h3>
                        <ul>
                            <li>Practice stress management techniques such as mindfulness, meditation, or yoga.</li>
                        </ul>
                    </li>
                </ol>
            </section>
            <section>
                <h2>Stay Committed</h2>
                <ol>
                    <li><h3>Regular Counseling:</h3>
                        <ul>
                            <li>Attend regular counseling sessions and support group meetings.</li>
                        </ul>
                    </li>
                    <li><h3>Continuous Learning:</h3>
                        <ul>
                            <li>Stay informed about gambling addiction and effective recovery strategies.</li>
                        </ul>
                    </li>
                    <li><h3>Goal Setting:</h3>
                        <ul>
                            <li>Set realistic goals for your recovery and celebrate your achievements.</li>
                        </ul>
                    </li>
                </ol>
            </section>
            <section>
                <h2>Emergency Measures</h2>
                <ol>
                    <li><h3>Crisis Plan:</h3>
                        <ul>
                            <li>Develop a crisis plan for moments when the urge to gamble feels overwhelming. This might include calling a trusted friend, attending a support group meeting, or engaging in a distracting activity.</li>
                        </ul>
                    </li>
                </ol>
            </section>
            <ByTheBookStatement/>
            <Footer />
        </main>
    );
}

export default AddictionPage;
