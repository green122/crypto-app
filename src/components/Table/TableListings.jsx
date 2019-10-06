import React from "react";
import { Table } from "semantic-ui-react";

export default function TableListings({ listings, configKeys }) {
  if (!listings[0]) {
    return null;
  }
  const headers = configKeys.map(key => listings[0][key].label);
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {headers.map(header => (
            <Table.HeaderCell>{header}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {listings.map(listing => (
          <Table.Row>
            {configKeys.map(key => (
              <Table.Cell>{listing[key].value}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
