import React from "react";
import { Table } from "semantic-ui-react";

export default function TableListings({ listings, configKeys }) {
  if (!listings[0]) {
    return null;
  }
  const headers = configKeys
    .filter(key => Boolean(listings[0][key].label))
    .map(key => listings[0][key].label);
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {headers.map((header, index) => (
            <Table.HeaderCell key={index}>{header}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {listings.map(listing => (
          <Table.Row key={listing.slug.value}>
            {configKeys.map(key => (
              listing[key].label && <Table.Cell key={key}>{listing[key].value}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
