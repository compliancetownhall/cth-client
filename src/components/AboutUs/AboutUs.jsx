import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  ul,
  li,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const AboutUs = () => {
  return (
    <Container>
      <Heading as="h1" pt="4">
        About Us
      </Heading>
      <VStack paddingTop="40px" spacing="8" alignItems="flex-start">
        <Text as="p" fontSize="lg">
          In addition to internal controls, the Companies Act, 2013 prescribes
          an annual audit of companies. The audit reports – which provide an
          overview of operational, financial and governance matters – must be
          filed with the registrar of companies as part of companies&#39;
          routine filings. Certain companies that exceed certain turnover,
          paid-up share capital or indebtedness thresholds must also carry out
          an internal audit and/or a secretarial audit. Further, companies
          engaged in production or manufacturing may be required to do a cost
          audit. All audits are typically conducted by suitably qualified
          external consultants.
        </Text>
        <Text as="p" fontSize="lg">
          The executive directors of a company are generally responsible for
          ensuring that the operation and management of a company are in
          compliance with the applicable law. The board of directors may also
          specifically designate individual directors to be in charge of
          specific aspects of the company. Accordingly, companies required to
          comply with reporting obligations mandated by the Securities and
          Exchange Board of India (SEBI) may designate any number of directors
          (or any subcommittee of the board of directors) to implement a
          suitable ESG strategy in line with the ethos of the company and ensure
          the company&#39;s continued adherence to that strategy. Such directors
          and/or board committees may be in charge of implementing ESG
          initiatives to be undertaken by the company. Under the SEBI (Listing
          and Disclosure Requirements) Regulations, 2015, the company must
          designate a compliance officer (usually the company secretary) to be
          responsible for reporting obligations under the SEBI (Listing and
          Disclosure Requirements) Regulations, 2015, among other things. The
          compliance officer will be statutorily liable for ensuring accurate
          reporting in the business responsibility and sustainability report.
        </Text>
        <Text as="p" fontSize="lg">
          The board of directors of a company has certain fiduciary duties
          towards the company under the Companies Act, 2013. The directors must
          act in good faith to promote the objectives of the company for the
          benefit of its stakeholders. Further, Schedule IV of the Companies
          Act, 2013, which sets out the code for independent directors,
          emphasises that the interests of all stakeholders of the company must
          be balanced. The board has an overall supervisory role over the
          company and its operations and policies. The Companies Act, 2013
          requires qualifying entities to establish committees to effectively
          administer various aspects of the company and ensure that its
          operations have a positive impact on ESG matters, such as:
          <li>an audit committee;</li>
          <li>a nomination and remuneration committee;</li>
          <li>a corporate social responsibility committee; and</li>
          <li>a stakeholder relationship committee.</li>
        </Text>
        <Text as="p" fontSize="lg">
          As the size of companies increases, they become subject to more
          stringent governance measures, including a requirement to appoint
          suitable key managerial personnel such as a company secretary,
          managing director or CEO. To ensure that the board acts impartially
          towards all stakeholders in this respect, larger companies must also
          ensure the neutrality of the board by including independent directors
          and women directors. The prescribed format of the business
          responsibility and sustainability report aims to promote the
          dissemination of information on various aspects of the operations of a
          company which are relevant from an ESG perspective. The report seeks
          to procure information from companies relating to:
          <Text pt="2" pb="2" as={"h2"} fontWeight={"500"}>
            environmental matters, such as details of:
          </Text>
          <li>greenhouse gas emissions;</li>
          <li>consumption of non-renewable resources;</li>
          <li>waste management;</li>
          <li> extended producer responsibility;</li>
          <li>local sourcing; and</li>
          <li>engagement with local stakeholders;</li>
          <Text pt="2" pb="2" as={"h2"} fontWeight={"500"}>
            social aspects, such as initiatives being undertaken in relation to:
          </Text>
          <li>the health and safety of employees;</li>
          <li>human rights;</li>
          <li>diversity in the workforce; and</li>
          <li>gender sensitivity;</li>
          <Text pt="2" pb="2" as={"h2"} fontWeight={"500"}>
            {" "}
            governance matters, such as implementation of:{" "}
          </Text>
          <li>anti-corruption and anti-bribery policies; and</li>
          <li>a robust corporate governance structure.</li>
        </Text>

        <Text as="p" fontSize="lg">
          A dedicated ESG policy should be put in place by each financial
          institution also, which should be followed when assessing the profiles
          of prospective borrowers. Borrowers may be screened according to the
          level of sustainability in their business model, based on identified
          criteria such as:
          <li>
            having a detailed ESG policy that outlines long-term sustainable
            development goals;
          </li>
          <li>undertaking a voluntary ESG audit;</li>
          <li>
            procuring an ESG rating from an adequately qualified rating agency;
          </li>
          <li>
            instituting discernible measures for minority shareholder
            protection;
          </li>
          <li>
            incorporating cost reductions in business operations along with
            energy efficiency proposals; and
          </li>
          <li>
            outlining suitable policies to increase employee productivity and
            enhance employee welfare.
          </li>
          <Text fontWeight={"500"} pt="2" pb="2">
            Financial institutions should also consider:
          </Text>
          <li>
            developing sound governance systems to oversee the environmental and
            social performance of their business activities; and
          </li>
          <li>
            disclosing relevant data to their shareholders and other relevant
            stakeholders such as employees.
          </li>
        </Text>

        <Text as="p" fontSize="lg">
          Investors and shareholders play a key role in shaping the ESG
          strategies of companies, as they have the capital resources to induce
          positive changes at scale.
        </Text>

        <Text as="p" fontSize="lg">
          We have seen investors acting as crusaders for transparent corporate
          governance, social commitments and environmental justice. Around the
          globe, it is clear that companies which focus on ESG factors can be
          rewarded with meteoric growth. Many companies are developing ESG
          policies and making voluntary ESG disclosures at their shareholders'
          meetings to win the confidence of stakeholders.
        </Text>

        <Text as="p" fontSize="lg">
          Under all these constraints, the corporate community needs a forum to
          serve as a platform or a common meeting ground in the web-space which
          leads us to{" "}
          <Link color={"blue"} href="https://compliancetownhall.com" isExternal>
            Compliance Townhall <ExternalLinkIcon mx="2px" />
          </Link>
          <Text fontSize={"2xl"} color="#54bfd7" pt="4" pb="2">
            {" "}
            Welcome to The Compliance Town Hall.
          </Text>
        </Text>
      </VStack>
    </Container>
  );
};

export default AboutUs;
