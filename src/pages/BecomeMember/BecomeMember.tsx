import './becomeMember.scss';
import caclogo from '/assets/CAC.png';
import MANGreen from '/assets/MAN-green.png';
import MANBlack from '/assets/MAN-black.png';
import groupImg from '/assets/group-img.png';

function BecomeMember() {
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
                    <div className='circle'></div>
                    <div className='vertical-line'></div>
                    <div className='circle'></div>

                    <div className='vertical-line'></div>
                    <div className='circle'></div>
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
            <div className='section3'>
                <h2>WHY SHOULD YOU JOIN MANEG?</h2>
                <div className='whyContainer'>
                    <div className='whyLeft'>
                        <h3>International Recognition</h3>
                        <h3>Government support</h3>
                        <div>
                            {' '}
                            <h3>EEG & ETLS Incentives</h3>
                            <p>
                                MANEG is a member of the Federal Ministry of
                                Foreign Affairs’ National Approval Committee for
                                ETLS in Nigeria. We serve in several committees
                                on non-oil and economic diversification in
                                Nigeria and the ECOWAS.
                            </p>
                        </div>
                        <h3>Economic Diversification</h3>
                    </div>
                    <div className='whyRight'>
                        <img src={groupImg} alt='img ' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BecomeMember;
