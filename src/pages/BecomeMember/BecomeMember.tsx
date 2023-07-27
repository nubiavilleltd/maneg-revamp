import './becomeMember.scss';
import caclogo from '/assets/CAC.png';
import MANGreen from '/assets/MAN-green.png';
import MANBlack from '/assets/MAN-black.png';
import groupImg from '/assets/group-img.png';
import plus from '/assets/plus.png';
import minus from '/assets/minus.png';
import {useState} from 'react';
import whiteArrow from '/assets/arrow-right.png';
import partner from '/assets/partner.png';
import partner2 from '/assets/partner2.png';
import partner3 from '/assets/partner3.png';
import partner4 from '/assets/partner4.png';
import partner5 from '/assets/partner5.png';
import partner6 from '/assets/partner6.png';
import partner7 from '/assets/partner7.png';
import partner8 from '/assets/partner8.png';
import partner9 from '/assets/partner9.png';
import partner10 from '/assets/partner10.png';
import partner11 from '/assets/partner11.png';
import Transition from '../../utils/Transistion/Transition';

const paragraphsData = [
    {
        id: 'paragraph1',
        title: 'International Recognition',
        content:
            'MANEG is a member of the Federal Ministry of Foreign Affairs’ National Approval Committee for ETLS in Nigeria. We serve in several committees on non-oil and economic diversification in Nigeria and the ECOWAS.',
    },
    {
        id: 'paragraph2',
        title: 'Government support',
        content:
            'MANEG is a member of the Federal Ministry of Foreign Affairs’ National Approval Committee for ETLS in Nigeria. We serve in several committees on non-oil and economic diversification in Nigeria and the ECOWAS.',
    },
    {
        id: 'paragraph3',
        title: 'EEG & ETLS Incentives',
        content:
            'MANEG is a member of the Federal Ministry of Foreign Affairs’ National Approval Committee for ETLS in Nigeria. We serve in several committees on non-oil and economic diversification in Nigeria and the ECOWAS.',
    },
    {
        id: 'paragraph4',
        title: 'Economic Diversification',
        content:
            'MANEG is a member of the Federal Ministry of Foreign Affairs’ National Approval Committee for ETLS in Nigeria. We serve in several committees on non-oil and economic diversification in Nigeria and the ECOWAS.',
    },
];

function BecomeMember() {
    const [showParagraphs, setShowParagraphs] = useState<
        Record<string, boolean>
    >(() =>
        paragraphsData.reduce(
            (acc, paragraph) => ({...acc, [paragraph.id]: false}),
            {},
        ),
    );

    const toggleParagraph = (id: string) => {
        setShowParagraphs((prevState) => ({
            ...Object.fromEntries(paragraphsData.map(({id}) => [id, false])),
            [id]: !prevState[id],
        }));
    };

    return (
        <div className='memberContainer'>
            <div className='memberBanner'>
                <h2>MANEG MEMBERSHIP</h2>
                <p>
                    Businesses in Nigeria that are exporting or are thinking
                    about exporting as a component of their business can become
                    members of MANEG. Several major corporations and SMEs are on
                    our roster of members. Members of MANEG can expect to take
                    full advantage of all of our services, including
                    professional assistance with exports and government
                    regulations.
                </p>
            </div>
            <h2 style={{textAlign: 'center', paddingTop: '2em'}}>
                HOW TO BECOME A MEMBER ?
            </h2>

            <div className='become'>
                <div className='how-left'>
                    <div>
                        <span> 01</span>
                        <img src={caclogo} alt='img' />
                    </div>
                    <div>
                        <span> 02</span> <img src={MANBlack} alt='img' />
                    </div>
                    <div>
                        <span> 03</span> <img src={MANGreen} alt='img' />
                    </div>
                </div>
                <div>
                    {/* <div className='circle'></div>
                    <div className='vertical-line'></div>
                    <div className='circle'></div>

                    <div className='vertical-line'></div>
                    <div className='circle'></div> */}
                </div>
                <div className='how-right'>
                    <div>
                        <h4>REGISTER WITH CAC</h4>
                        <p>
                            First things first, ensure that your organisation is
                            registered with the Corporate Affairs Commission
                            (CAC) and that you are operating within Nigeria.
                        </p>
                    </div>

                    <div>
                        <h4>BECOME A MEMBER OF MAN</h4>
                        <p>
                            Obtain a membership with the Manufacturers
                            Association of Nigeria (MAN). Visit the
                            Manufacturers Association of Nigeria for
                            registration details
                        </p>
                    </div>

                    <div>
                        <h4>FILL OUT THE FORM</h4>
                        <p>
                            Pick up an application form at our office at the MAN
                            House in Lagos.
                        </p>
                    </div>
                </div>
            </div>
            <section className='section3'>
                <h2>WHY SHOULD YOU JOIN MANEG?</h2>
                <div className='whyContainer'>
                    <div className='whyLeft'>
                        {paragraphsData.map((paragraph) => (
                            <div
                                key={paragraph.id}
                                style={{display: 'flex', gap: '1em'}}
                            >
                                <div
                                    onClick={() =>
                                        toggleParagraph(paragraph.id)
                                    }
                                >
                                    <img
                                        src={
                                            showParagraphs[paragraph.id]
                                                ? minus
                                                : plus
                                        }
                                        alt='img'
                                    />
                                </div>
                                <div>
                                    <h3>{paragraph.title}</h3>
                                    {showParagraphs[paragraph.id] && (
                                        <p>{paragraph.content}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='whyRight'>
                        <img src={groupImg} alt='img ' />
                    </div>
                </div>
            </section>
            <section className='section4'>
                <h2>LOOKING FOR A MANEG MEMBER ?</h2>
                <p>
                    Visit the MANEG member directory to see a full list of all
                    current MANEG members.
                </p>
                <div>
                    <button>
                        MEMBERS DIRECTORY <img src={whiteArrow} alt='img' />
                    </button>
                </div>
            </section>
            <div className='testimonials'>
                <h2>TESTIMONIALS</h2>
                <div>slide</div>
            </div>
            <section className='section5'>
                <h2>OUR CORPORTE PARTNERS</h2>
                <div className='partners'>
                    <div>
                        <img src={partner} alt='img' />
                    </div>
                    <div>
                        <img src={partner2} alt='img' />
                    </div>
                    <div>
                        <img src={partner3} alt='img' />
                    </div>
                    <div>
                        <img src={partner4} alt='img' />
                    </div>
                    <div>
                        <img src={partner5} alt='img' />
                    </div>
                    <div>
                        <img src={partner6} alt='img' />
                    </div>
                    <div>
                        <img src={partner7} alt='img' />
                    </div>
                    <div>
                        <img src={partner8} alt='img' />
                    </div>
                    <div>
                        <img src={partner9} alt='img' />
                    </div>
                    <div>
                        <img src={partner10} alt='img' />
                    </div>
                    <div>
                        <img src={partner11} alt='img' />
                    </div>
                    <div>
                        <img src={partner} alt='img' />
                    </div>
                </div>
            </section>
        </div>
    );
}

const TransitionBecomeMember = () => {
    return <Transition OgComponent={<BecomeMember />} />;
};

export default TransitionBecomeMember;
