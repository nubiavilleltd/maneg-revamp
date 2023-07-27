import styles from "./MemberBenefits.module.scss";
import Transition from "../../utils/Transistion/Transition";
import senate from "../../assets/senate.jpg";
import exportMoney from "../../assets/export-money.jpg";
import Button from "../../components/UI/Button/Button";

const MemberBenefits = () => {
  return (
    <>
      <div className={styles["benefits-body"]}>
        <div className={styles["intro-text"]}>
          <h1 className={styles.header}>Member Incentives</h1>
          <p>
            The Nigerian government offers post-shipment incentives for non-oil
            exports to support the growth of non-oil Nigerian exports. The most
            popular incentives among Nigerian exporters are the Export Expansion
            Grant (EEG) and the ECOWAS Trade Liberalisation Scheme (ETLS).
            <span>
              MANEG is well-equipped to support Nigerian businesses seeking
              grants for non-oil exports. In the following ways, we provide
              documentation assistance, readiness evaluations, and checks:
            </span>
          </p>

          <ul>
            <li>
              We hold training workshops to enable our members to understand how
              to use the EEG.
            </li>
            <li>
              We work with the Nigerian government to advocate for the long-term
              viability of the EEG system and the resolution of claims for
              non-oil exporters based on research.
            </li>
            <li>
              We work with the authorities to determine a minimum allowable EEG
              rate and score band for our members.
            </li>
          </ul>
        </div>
        <div className={styles["image-container"]}>
          <img src={senate} alt="" />
        </div>
      </div>
      <div className={styles["section-2"]}>
        <div className={styles["first-col"]}>
          <div className={styles["export-money"]}>
            <img src={exportMoney} alt="" />
          </div>
          <div className={styles["export-text"]}>
            <h1>What is EEG?</h1>
            <p>
              The Export Expansion Grant (EEG) is intended to assist active
              exporters in increasing their overseas operations. It is a
              post-shipment incentive meant to encourage Nigerian exporters to
              increase export volume, value, and improve Nigerian product global
              competitiveness. Nigerian exporters were introduced to the Export
              Expansion Grant (EEG) scheme in 1986 as a measure of increasing
              the volume of non-oil exports in the country. Between 2005 and
              2013, the value of Nigerian exports increased from $750 million to
              $2.9 billion as a result of this scheme.
            </p>
          </div>
        </div>
        <div className={styles["second-col"]}>
          <div className={styles["export-text"]}>
            <h1>What is ETLS?</h1>
            <p>
              To strengthen commerce among its member countries, the Economic
              Community of West African States (ECOWAS) established the ECOWAS
              Trade Liberalisation Scheme (ETLS). The ETLS was established by
              ECOWAS at the 1976 Heads of State Summit in Lome, Togo. Nigeria
              signed the ETLS protocol on May 29th, 1979, and ratified it on
              September 12th, 1979. The ETLS initially concentrated on
              agricultural, handicraft, and crude products, but in 1990, the
              plan was expanded to cover industrial products.
            </p>
          </div>
          <div className={styles["export-money"]}>
            <img
              src="https://www.shutterstock.com/image-vector/member-countries-economic-community-west-260nw-1630364278.jpg"
              alt="ecowas"
            />
          </div>
        </div>
      </div>
      <section className={styles["more-information"]}>
        <div className={styles.grant}>
          <div className={styles["first-col"]}>
            <div className={styles["grant-header"]}>
              <h1>Export Expansion Grant (EEG)</h1>
              <h3>Benefits of the Scheme & Guidance</h3>
            </div>
            <div className={styles["grant-text"]}>
              <p>
                Nigerian exporters can receive between 5% and 15% of their
                annual export value as a grant from the EEG, dependent on the
                product category. The EEG provides grants in the form of credit.
                This credit is referred to as a Negotiable Export Credit
                Certificate (NECC). The certificate can be used to pay all
                Federal Government taxes, including corporate income tax, VAT,
                WHT, and others.
              </p>

              <ul>
                <li>
                  Settlement of all federal government taxes, including
                  corporate income tax, VAT, WHT, and others, as well as the
                  following
                </li>
                <li>Purchase of Federal Government Bonds</li>
                <li>
                  Settlement of loan facilities by the Bank of Industry, the
                  NEXIM Bank, the Bank of Agriculture, and the CBN intervention
                  facilities
                </li>
                <li>Settlement of AMCON liabilities</li>
              </ul>
            </div>
          </div>
          {/* <span className={styles.line}></span> */}
          <div className={styles["second-col"]}>
            <div className={styles["first-content"]}>
              <h2>Application procedures</h2>
              <p>
                The following guidelines, provided by the Nigerian Export
                Promotion Council must be followed by a company to benefit from
                the EEG scheme:
              </p>
              <ul>
                <li>The company must be registered with CAC and NEPC</li>
                <li>
                  The company must have conducted formal exports, with earnings
                  repatriated to a Nigerian bank account, and provide a CBN
                  confirmation
                </li>
                <li>
                  The company’s yearly export turnover must be at least five
                  million (₦5,000,000.00) naira.
                </li>
                <li>
                  The company must be a manufacturer/producer or seller of
                  Nigerian-made goods.
                </li>
                <li>
                  The company must provide proof of confirmed repatriation of
                  export revenues into a Nigerian Domiciliary Account, as well
                  as:
                  <li>
                    Submit baseline data to the NEPC, which should include
                    Audited Financial Statements and operational capacity
                    information, as well as a Tax Clearance Certificate (TCC)
                    and an Export Expansion Plan (EPP).
                  </li>
                </li>
              </ul>
            </div>
            <div className={styles["second-content"]}>
              <h2>Exporter Accreditation</h2>
              <p>
                To be accredited for the EEG, businesses must have the
                following:
              </p>
              <ul>
                <li>Annual Accreditation fees – ₦100, 000.00</li>
                <li>
                  Completed Accreditation form – Download EEG Accreditation Form
                </li>
                <li>ID card – Download ID card front / ID card back</li>
                <li>Copy of Certificate of Incorporation</li>
                <li>Two passport photographs</li>
                <li>Copy of Exporter’s Registration Certificate</li>
                <li>Evidence of payment</li>
              </ul>
            </div>
            <div className={styles["third-content"]}>
              <h2>Who is EEG for?</h2>
              <ul>
                <li>Manufactured items (ready for consumption)</li>
                <li>Manufactured goods used as feed for further processing</li>
                <li>Intermediate/processed products</li>
                <li>
                  Primary agricultural commodities, including solid minerals
                </li>
              </ul>
            </div>

            <div className={styles["fourth-content"]}>
              <h2>How can MANEG help?</h2>
              <ul>
                <li>
                  We hold training workshops to enable our members to understand
                  how to use the EEG
                </li>
                <li>
                  We work with the government to advocate for the long-term
                  viability of the EEG scheme and the resolution of claims for
                  non-oil exporters based on research
                </li>
                <li>
                  We work with the authorities to determine a minimum allowable
                  EEG rate and score band for our members.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["grant-cta"]}>
        <Button type="button" className={styles.grantBtn}>
          Omo o
        </Button>
      </section>
    </>
  );
};

const TransitionMemberBenefits = () => {
  return <Transition OgComponent={<MemberBenefits />} />;
};

export default TransitionMemberBenefits;
