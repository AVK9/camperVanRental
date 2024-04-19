import { DetailsBox, Namep, Table } from './VehicleDetails.styled';

export const VehicleDetails = ({ data }) => {
  const { length, width, height, tank, consumption } = data;
  return (
    <>
      <DetailsBox>
        <Namep>Vehicle details</Namep>
        <Table>
          <tbody>
            <tr>
              <td>Length</td>
              <td>{length}</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>{width}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{height}</td>
            </tr>
            <tr>
              <td>Tank</td>
              <td>{tank}</td>
            </tr>
            <tr>
              <td>Consumption</td>
              <td>{consumption}</td>
            </tr>
          </tbody>
        </Table>
      </DetailsBox>
    </>
  );
};
