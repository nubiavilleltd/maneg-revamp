import groupImg from '../assets/group-img.png';
import aboutImg1 from '../assets/about-img.png';
import aboutImg2 from '../assets/about-img2.png';
import aboutImg3 from '../assets/about-img3.png';
import aboutImg4 from '../assets/about-img4.png';
import aboutImg5 from '../assets/about-img5.png';
import arrowRight from '../assets/arrow-right.png';

import '../styles/about.scss';

function About() {
    return (
        <div className='eventContainer'>
            {/* nav component */}
            <main>
                <section className='sect1'>
                    <div className='sect1Text'>
                        <h3>WHO ARE WE?</h3>
                        <p>
                            The Manufacturers Association of Nigeria Export
                            Promotion Group – MANEG is a group of Nigerian
                            manufacturers who have joined hands together to
                            promote Nigerian non-oil exports. MANEG is the
                            largest recognized body dedicated to non-oil export
                            promotion. Our reputation extends across both the
                            business and governmental sectors. Internationally,
                            the Economic Community of West African States –
                            ECOWAS – recognizes us as a prominent stakeholder in
                            the promotion of non-oil exports. The Export
                            Expansion Grant – EEG – is the federal government’s
                            post-shipment incentive for non-oil exports where we
                            collaborate as a focal point between the government
                            and private business organizations. We work with the
                            Nigerian Export Promotion Council (NEPC) and a
                            variety of Federal Ministries, including the Vice
                            President’s Office to create a better business
                            environment for Nigerian businesses involved in
                            non-oil exports.
                        </p>
                    </div>
                    <div className='sect1img'>
                        <img src={groupImg} alt='img ' />
                    </div>
                </section>
                <section className='sect2'>
                    <div className='leftHelp'>
                        <div>
                            {' '}
                            <img src={aboutImg4} alt='img' />
                        </div>
                    </div>
                    <div className='rightHelp'>
                        <h3>HOW CAN WE HELP ?</h3>
                        <p>
                            MANEG, like its parent corporation, is in the
                            advocacy industry as its major purpose, with a
                            primary focus on legislation that help boost
                            enterprises exporting non-oil products.
                        </p>
                        <p>
                            MANEG, like its parent corporation, is in the
                            advocacy industry as its major purpose, with a
                            primary focus on legislation that help boost
                            enterprises exporting non-oil products.
                        </p>
                    </div>
                </section>
                <section className='sect3Container'>
                    <div className='sect3'>
                        <div className='leftHistory'>
                            <h3>MANEG'S HISTORY</h3>
                            <p>
                                The Manufacturers Association of Nigeria, MAN,
                                established the MAN Export Promotion Group as
                                one of its subgroups. MAN was founded in 1971
                                with the goal of bridging the communication gap
                                between Nigerian manufacturers as a whole, the
                                government, and the general public. MAN has been
                                advocating for policies that enable Nigerian
                                manufacturers build their operations since its
                                inception.
                            </p>
                        </div>
                        <div className='rightHistory'>
                            <img src={aboutImg1} alt='img' />
                        </div>
                    </div>
                </section>
                <section className='sect4'>
                    <div className='leftLead'>
                        <h3>OUR LEADERSHIP</h3>
                        <p>
                            The MAN Export Promotion Group was established more
                            than ten years ago, and since that time, Nigerian
                            manufacturers have served as its chairpersons. The
                            desire for advancing sustainable development in the
                            nation is a trait that all of the group’s executives
                            share, starting with our trailblazing chairman
                        </p>
                        <h3>Chief Ede Dafione</h3>
                        <p>
                            Chief Ede Dafinone serves as the Chairperson of
                            MANEG. He holds the position and has served
                            dutifully after he was nominated and chosen as the
                            Chairman during the MANEG annual general meeting
                        </p>
                    </div>
                    <div className='rightLead'>
                        <img src={aboutImg2} alt='img' className='manImg' />
                        <div className='rightLeadText'>
                            <h3>OUR CHAIRMAN</h3>
                            <p>Chief Ede Dafinone</p>
                            <button>
                                READ MORE <img src={arrowRight} alt='arrow' />
                            </button>
                        </div>
                    </div>
                </section>
                <section className='sect5'>
                    <div className='pastAchievers'>
                        <h3>PAST ACHIEVERS OF MANEG</h3>
                        <p>
                            Since its founding, MANEG has had 3 chairpersons,
                            including our current chair, Chief Ede Dainone. All
                            of the group’s chairs are from different
                            manufacturing sectors, where they all held executive
                            roles. Members of MANEG elect the group’s
                            leadership, who are expected to represent the
                            interests of all exporters in the nation, including
                            members and non-members. To that end, all MANEG
                            leaders are equally passionate about boosting
                            non-oil exports to strengthen the nation’s economy.
                            The list of our former chairs is below.
                        </p>
                    </div>
                    <div className='achievers'>
                        <div>
                            <img src={aboutImg5} alt='img' />
                            <p>
                                The second chairman of MANEG was the late Tunde
                                Oyelola, a Fellow of the Society of Chemical
                                Engineers of Nigeria. Read more.
                            </p>
                        </div>
                        <div>
                            <img src={aboutImg3} alt='img' />
                            <p>
                                The first chair of MANEG was the late Romeo
                                Baberopoulos. A founding member of the Nigerian
                                Foundries. Read more
                            </p>
                        </div>
                    </div>
                    <div className='ourWork'>
                        <h3>OUR WORK</h3>
                        <p>
                            Since its founding, MANEG has worked to create a
                            friendly business environment for Nigerian
                            exporters. Since then, we have made significant
                            progress, and we are happy to have contributed to
                            the country’s expanding economic potential. As we
                            collaborate with the Nigerian government to develop
                            regulations and infrastructure that encourage global
                            company emergence, we unquestionably anticipate even
                            greater things in the future
                        </p>
                        <button>
                            ACTIVITY TIMELINE
                            <img src={arrowRight} alt='arrow' />
                        </button>
                    </div>
                </section>
            </main>
            {/* footer component */}
        </div>
    );
}

export default About;
