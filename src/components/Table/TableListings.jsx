import React from "react";
import { Table } from "semantic-ui-react";

export default function TableListings({ listings }) {
    console.log(listings);
  return (
    <Table unstackable celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Rank</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Price Change (24h)</Table.HeaderCell>
          <Table.HeaderCell>Market Cap</Table.HeaderCell>
          <Table.HeaderCell> Volume (24h)</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {listings.map(
          ({ rank, name, priceUSD, priceChange24, marketCAP, volume24 }) => (
            <Table.Row>
              <Table.Cell>{rank}</Table.Cell>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{priceUSD}</Table.Cell>
              <Table.Cell>{priceChange24}</Table.Cell>
              <Table.Cell>{marketCAP}</Table.Cell>
              <Table.Cell>{volume24}</Table.Cell>
            </Table.Row>
          )
        )}
      </Table.Body>
    </Table>
  );
}
