import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

const InternalInvestigation = () => {
  return (
    <Container>
      <Heading as="h1" pt="4">
        INTERNAL INVESTIGATIONS
      </Heading>
      <VStack paddingTop="40px" spacing="8" alignItems="flex-start">
        <Text as="p" fontSize="lg">
          Internal investigations into compliance matters have become mandatory
          for corporates in India. Such internal investigations are required for
          complaints pertaining to accounting irregularities, improper payments
          or benefits to customers or government employees, allegations of
          bribery of public officials in order to conduct or enhance business,
          employee misconduct or any activity in the course of business which
          may bring disrepute to the organisation's name or cause financial harm
          to the company, etc. Investigations have become inescable as they
          serve as a handy tool for strengthening compliance programmes, keeping
          a check on vendors and determining their performance. The findings in
          an investigation can also be utilised to improve training of employees
          and vendors on an ongoing basis.
          <br />
          <br />
          Apart from the above Corprorate entities also require to carry out
          internal investigations;
        </Text>
        <Text>
            <li>to address the Whistlblower Complaints &</li>
            <li>to do justice to POSH complaints.</li>
        </Text>
        <Text as="p" fontSize="lg">
          <Link color={"blue"} href="https://compliancetownhall.com" isExternal>
            Compliance Townhall <ExternalLinkIcon mx="2px" />
          </Link>{" "}
          is the go to site which welcomes investigators, researchers,
          compliance professionals and corporates requiring faster and incisive
          disposal of internal investigations with utmost confidentiality and
          accountability, all on board for a greater common goal.
        </Text>
      </VStack>
    </Container>
  );
};

export default InternalInvestigation;
