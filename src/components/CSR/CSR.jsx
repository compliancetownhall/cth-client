import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

const CSR = () => {
  return (
    <Container>
      <Heading as="h1" pt="4">
        CSR - Corporate Social Responsibility as a Corporate Compliance
        barometer.
      </Heading>
      <VStack paddingTop="40px" spacing="8" alignItems="flex-start">
        <Text as="p" fontSize="lg">
          The regulated function of CSR under the Companies Act 2013 is going to
          complete a decade this year. These ten years in the journey of CSR has
          been historic in the Indian Corporate Sector. The pitch is so high
          that we witness a change of regulation and rules in CSR at the rate of
          one per year, at the least. The latest GoI notification came last
          September, 2022. The final word on CSR is yet to be written in India.
          <br/>
          <br/>
          While the heat on CSR is on, both the corporates and the CSR
          professionals, both at the end of the funding agencies and the
          implementors and as well as at the end of the beneficiaries - all are
          struggling to meet the regulation benchmarks and meet the statutory
          obligations before time. The organisations on the one hand are facing
          uphill task to meet the expenditure targets of their CSR budget. On
          the other hand, the implementors of the CSR projects are saddled with
          huge obstacles that come one after another like the sea-waves. The
          Companies Act has sufficiently narrowed down the range of the
          beneficiaries. Even then there are a large number of expected
          beneficiaries who are waiting with askance for their share of the CSR
          Fund, which has eluded them, year after year. There are huges gaps
          between policy and implementation in CSR.
        </Text>

        <Text as="p" fontSize="lg">
          <Link color={"blue"} href="https://compliancetownhall.com" isExternal>
            Compliance Townhall <ExternalLinkIcon mx="2px" />
          </Link>{" "}
          provides a basis platform for all the discerning CSR professionals of
          all ilks to come together under one single domain - meet, discuss,
          share and empower each other for the larger good of the society.
        </Text>
      </VStack>
    </Container>
  );
};

export default CSR;
