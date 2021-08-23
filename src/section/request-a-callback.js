import { useEffect, useState } from "react";

function RequestACallback() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [agree, setAgree] = useState(false);

  const canBeSubmitted = () => {
    const isValid =
      firstname.trim().length &&
      lastname.trim().length &&
      email.trim().length &&
      phonenumber.trim().length &&
      jobtitle.trim().length &&
      organisation.trim().length &&
      agree;

    if (isValid) {
      document.getElementById("request-btn").removeAttribute("disabled");
    } else {
      document.getElementById("request-btn").setAttribute("disabled", true);
    }
  };

  useEffect(() => canBeSubmitted());

  return (
    <div className="request-a-callback">
      <div className="request-a-callback-wrapper">
        <div className="request-a-callback-header">
          <div className="header">Request a callback</div>
        </div>
        <div className="request-a-callback-information">
          <form>
            <form2>
              <div className="firstname">
                <label for="fname">First name</label>
                <input type="text" id="firstname" name="firstname"></input>
              </div>
              <div>
                <label for="lname">Last name</label>
                <input type="text" id="lastname" name="lastname"></input>
              </div>
            </form2>
            <label for="Email">Email</label>
            <input type="text" id="email" name="email"></input>
            <label for="Phone-Number">Phone Number</label>
            <input type="text" id="phonenumber" name="phonenumber"></input>
            <label for="Job-title">Job title</label>
            <input type="text" id="jobtitle" name="jobtitle"></input>
            <label for="Organisation">Organisation</label>
            <input type="text" id="organisation" name="organisation"></input>
            <label for="url">Website URL (optional)</label>
            <input type="text" id="url" name="url"></input>
          </form>
          <div className="policy-wrapper">
            <div className="policy">Privacy Policy</div>
            <div className="policy-info">
              Announcement Date: August 1, 2021
              <br />
              <br />
              Our Privacy Notice provides a framework of understanding about
              your personal data that is collected by us, (hereinafter called
              the “Data Controller”). Personal data collected by Data Controller
              will be controlled and processed in accordance with the terms of
              Notice.
              <br />
              <br />
              This Privacy Notice applies to (1) our job candidates and
              recipients of our career services, (2) our associates, who are
              people we source or place on assignment with one of our clients,
              or individual to whom we provide outplacement or career transition
              services, (3) uses of the websites and apps listed here (the
              “Sites”), and (4) representatives of our business partners,
              clients and vendors.
              <br />
              <br />
              This Privacy Notice describes the types of personal data or
              personal information we collect, how we use the information, how
              we process and protect the information we collect, for how long we
              store it with whom we share it. To whom we transfer it and the
              rights that individuals can exercise regarding our use of their
              personal data. We also describe how you can contact us about our
              privacy practices and to exercise your rights. In general, our
              privacy practices conform with local law and regulation, including
              where applicable the provisions of European Union’s General Data
              Protection Regulation. Accordingly, our policy practices may vary
              among the countries in which we operate to reflect local practices
              and legal requirements.
              <br />
              <br />
              There is the listed section applicable to our Privacy Policy as
              below. · Information we collect <br />
              · How we use the information we collect <br />
              · How we process and protect personal information <br />
              · Legitimate Interest <br />
              · How long we store data we collect <br />
              · Information we share <br />
              · Your rights and a Data Subject <br />
              <br />
              · The Disclosure of Personal Data to a Third party <br />
              · Data Protection Officer <br />
              · Updates to Our Privacy Notice <br />
              · How to contact us <br />
              <br />
              Information We Collect
              <br />
              <br />
              We collect personal information about you in various ways, such as
              through on sites and social media channels; at our events and
              through phone and fax; through job applications and in connection
              with person recruitment; and in connection with our interactions
              with clients and vendors. We may collect the following types of
              personal information (as permitted under local law):
              <br />
              contact information (such as name, postal address, email address
              and telephone number); · username and password when you register
              on our websites;
              <br />· information you provide about your close relationship or
              other people you would like to contact. (The Data Controller
              assumes that the other person previously gave an authorization for
              such communication); and
              <br />· other information you may provide to us, such as in
              surveys or through the “Request to callback” feature on our Sites
              In addition, if you are an associate or job candidates, you apply
              for a position or create an account/send an email to apply for
              position, we may collect the following types of personal data (as
              per mitted under local law):
              <br />· employment and education history;
              <br />· language proficiencies and other work-related skills;
              <br />· Social Security number, national identifier or other
              government-issued identification number;
              <br />· date of birth;
              <br />· gender;
              <br />· bank account information;
              <br />· citizenship and work authorization status;
              <br />· benefits information;
              <br />· tax-related information;
              <br />· information provided by references; and
              <br />
              <br />
              · results of drug tests, criminal and other background checks.
              <br />
              <br />
              In addition, we may collect information you provide to us about
              other individuals, such as information related to emergency
              contacts.
              <br />
              <br />
              How we use the information we collect
              <br />
              <br />
              The data controller collects and uses the data gathered for the
              following purposes (as permitted under local law):
              <br />
              a) providing workforce solutions and connecting people to work;
              <br />
              b) creating and managing online accounts;
              <br />
              c) processing payments;
              <br />
              d) managing our business partner, client, and vendor
              relationships;
              <br />
              e) where permitted under law and consistent with this Privacy
              Notice, to send promotional materials, alerts regarding available
              positions and other communications;
              <br />
              f) where permitted under law, for communicating about, and
              administering participation in, special events, promotions,
              offers, surveys, contests and market research;
              <br />
              g) responding to individuals “inquiries and claims”
              <br />
              h) operating, evaluating and improving our business (including
              developing, enhancing, analyzing and improving our services;
              managing our communications; performing data analytics; and
              performing accounting, auditing and other internal function);
              <br />
              i) protecting against, identifying and seeking to prevent fraud
              and other unlawful activity, claims and other liabilities; and
              <br />
              j) complying with and enforcing applicable legal requirements,
              relevant industry standards, contractual obligations and our
              policies.
              <br />
              <br />
              All process will be carried out based on adequate legal grounds
              which may fall into a number of categories, including: · consent
              or explicit consent from the data subject, where required by
              applicable law;
              <br />
              <br />
              <br />
              · to ensure that we comply with a statutory or contractual
              requirement, or a requirement necessary to enter into the contract
              (e.g. processing your personal data to ensure that your wages and
              taxes are paid correctly); or
              <br />
              <br />
              · it is essential and necessary for the legitimate interest of the
              Data Controller, as described in more detail below (e.g. allowing
              access to a website in order to provide the services offered)
              <br />
              <br />
              In addition to the activities listed above, if you are an
              associate or job candidate and you apply for a position or create
              an account to apply for a position, as permitted under local law,
              we use the information described in this Privacy Policy for the
              following purposes:
              <br />
              1. Providing you with job opportunities and work;
              <br />
              2. providing HR services to you, including administration of
              benefit programs, payroll, performance management and disciplinary
              investigations or actions;
              <br />
              3. providing additional services to you, such as training, career
              counselling and career transition services;
              <br />
              4. assessing your suitably as a job candidate and your associate
              qualifications for positions; and
              <br />
              5. performing data analytics, such as (i) analyzing our job
              candidate and associate base; (ii) assessing individual
              performance and capabilities, including scoring on work-related
              skills; (iii) identifying skill shortage; (iv) using information
              to match individuals and potential opportunities, and (v)
              analyzing pipeline data (trends regarding hiring practices).
              <br />
              <br />
              We also may use the information in other ways for which we provide
              specific notice at or prior to the time of collection.
              <br />
              <br />
              <br />
              <br />
              Legitimate Interest
              <br />
              <br />
              The Data Controller may process personal data for certain
              legitimate purposes, which includes some of all the following:
              <br /> · where the process enables us to enhance, modify,
              personalize or otherwise improve our services/ communications for
              our clients, candidates and associates;
              <br />· to identify and prevent fraud;
              <br />· to enhance security of our network and information
              systems;
              <br />· to better understand how people interact with our website;
              <br />· for direct marketing purposes;
              <br />· to provide postal communications to you which we think
              will be of interest to you; and
              <br />· to determine the effectiveness of promotional campaigns
              and advertising
              <br />
              <br />
              Whenever we process data for these purposes we will ensure that we
              keep your rights in high regard and take account of these rights.
              You have the right to object to such processing, and may do so by
              contacting us as described below. Please bear in mind that if you
              exercise your right to object, this may affect our ability to
              carry out and deliver services to you for your benefits.
              <br />
              <br />
              How long we store data we collect
              <br />
              <br />
              We store in our systems the personal data we collect in a way that
              allows the identification of the data subjects for no longer than
              it is necessary in light of the purposes for which the data was
              collected or for which that data is further processed.
              <br />· The necessity to retain the personal data collected, in
              order to offer services established with the user;
              <br />· The legitimate interest of the Data Controller, as
              described in the purposes above; and
              <br />· The exercise of specific legal obligations that make the
              processing and related storage necessary for specific period of
              times.
              <br />
              <br />
              Information we share
              <br />
              <br />
              We do not disclose personal data that we collect about you, except
              as described in this Privacy Notice or in separate notices
              provides in connection with particular activities. We may share
              personal data with vendors who perform services on our behalf
              based on our instructions. We do not authorize these vendors to
              use or disclose the information except as necessary to perform
              services on our behalf or comply with legal requirements. We also
              may share your personal data (i) if you are a job candidate, with
              clients who may have job opportunities available or interest in
              placing our job candidates; (ii) with others will whom we work,
              such as job placement consultants and subcontractors, to find you
              a job. In addition, we may disclose personal data about you (i) if
              we are required to do so by law or legal process; (ii) to law
              enforcement authorities or other government officials based on a
              lawful disclosure request and (iii) when we believe disclosure is
              necessary or appropriate to prevent physical harm or financial
              loss, or in connection with an investigation of suspected or
              actual fraudulent or illegal activity. We also reserve the right
              to transfer personal data we have about you in the event we sell
              or transfer all or a portion of our business or assets (including
              in the event of a reorganization, dissolution or liquidation).
              <br />
              <br />
              Your Rights as a Data Subject
              <br />
              <br />
              When authorized by applicable law, a data subject may exercise
              certain specific rights as prescribed in the Personal Data
              Protection Act, B.E. 2562 and other rights as follows:
              <br />
              <br />
              1. The Right to Access You are entitled to request access to and
              obtain a copy of your Personal Data, under the Data Controller’s
              care and responsibility, as well as to request the disclosure of
              the acquisition of your Personal Data without your consent.
              <br />
              <br />
              2. The Right to Rectification Should you discover that your
              Personal Data kept by the Data Controller is not correct or has
              been modified, you have the legal right to request
              <br />
              <br />
              the Data Controller to correct them so that your Personal Data is
              accurate, up-to-date, complete, and will not incur any
              misunderstanding.
              <br />
              <br />
              3. The Right to Erasure You have the legal right to request the
              Data Controller to erase, destroy, or to anonymize your Personal
              Data.
              <br />
              <br />
              4. The Right to Restriction of Processing You have the legal right
              to request the Data Controller restricts the processing and
              suspend the use of your Personal Data.
              <br />
              <br />
              5. The Right to Data Portability You have the legal right to
              receive the originally provided personal data in a structured and
              commonly used format or that you can request the transfer of the
              data to another data controller.
              <br />
              <br />
              6. The Right to Object You have the legal right to object to the
              processing of your Personal Data, namely the collection, use, or
              disclosure of your Personal Data as prescribed by law.
              <br />
              <br />
              7. The Right to Avoid Automated Decision Making You may request
              not to be subject to a decision based solely on automated
              processing, including profiling, if such profiling produces a
              legal effect concerning you or similarly significantly affects to
              you.
              <br />
              <br />
              8. The Right to Withdraw Consent You have the legal right to
              withdraw consent for the processing of your Personal Data as
              submitted to the Data Controller, but not if the consent
              withdrawal is restricted by law or by contract of benefit to you
              as a Data Subject. However, the withdrawal of consent shall not
              affect the processing of Personal Data to which you have already
              legally consented.
              <br />
              <br />
              <br />
              9. The Right to Complain You have the legal right to complain to
              authorized officials as prescribed by the Personal Data Protection
              Act, B.E. 2562 (2019) in case of the Data Controller’s
              infringement or non-compliance with the Act. In the event that the
              Data Subject lodges their request to exercise their rights as
              prescribed by the Personal Data Protection Act, B.E. 2562 (2019),
              upon reception of such request, the Data Controller will further
              proceed within the duration of time as prescribed by the Act.
              However, The Data Controller reserves the right to deny or not to
              proceed with the request as prescribed by law in case that the
              Data Subject has chosen to provide to the Data Controller only
              certain Personal Data which may cause the Data Controller not to
              be able to provide full services. Moreover, the Data Controller
              may not be able to collaborate with or to provide services to the
              Data Subject of they do not consent to the provision of
              information as required by the Data Controller.
              <br />
              <br />
              10.The Right to be informed in case of the modification of the
              Privacy Notice The Data Controller may consider and modify as
              appropriate this Privacy Notice to ensure that your Personal Data
              is well protected.
              <br />
              <br />
              The Disclosure of Personal Data to a Third Party
              <br />
              <br />
              The Data Controller may have the need to disclose Personal Data to
              stakeholders, vendors, clients and other relevant person whom is
              applicable to access your Personal Data and require the disclosure
              of the Personal Data to Thai authorities or Public Organizations
              concerned as prescribed by law or by court order or by the order
              of authorized officials for which the Personal Data will be kept
              confidential, either in paper form or electronic form, including
              during its transfer.
              <br />
              <br />
              <br />
              <br />
              Data Protection Officer The Data Controller has complied with
              Personal Data Protection Act, B.E. 2562 (2019) by appointing a
              Data Protection Officer (DPO) to review the Data Controller’s
              collection, usage and disclosure of Personal Data for conformance
              with the Personal Data Protection Act, B.E. 2562 (2019) including
              other related laws.
              <br />
              <br />
              Contact channels
              <br />
              Any enquires or questions on the Personal Data Protection can be
              addressed to following channels:
              <br />
              <br />
              Human Capital Hub (Thailand)Limited
              <br />
              <br />
              Address: 936 M.4, Soi Sriboonruang, Teparak Road, T. Teparak, A.
              Muang, Samutprakarn 10270
              <br />
              <br />
              Tel: 02-7580465 Email: info@humancapitalhub.com
            </div>
            <div class="checkboxes">
              <label>
                <input
                  type="checkbox"
                  id="checkbox"
                  className="checkbox-color"
                />{" "}
                I acknowledge that I have read and understood the Company’s
                policy and consent to the collection, use and record of my
                personal data by the Company for the purposes set out in the
                Policy.
              </label>
            </div>
            <button
              type="submit"
              id="request-btn"
              name="request-btn"
              className="request-btn"
            >
              Request a callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestACallback;
