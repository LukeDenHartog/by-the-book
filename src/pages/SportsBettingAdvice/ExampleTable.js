import Table from 'react-bootstrap/Table';

function BettingExample() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Team</th>
          <th>Moneyline</th>
          <th>Spread</th>
          <th>Total Goals</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Oilers</td>
          <td>+183</td>
          <td>+1.5 <br/>-135</td>
          <td>Over 6.5 <br/>-106</td>
        </tr>
        <tr>
          <td>Kings</td>
          <td>-217</td>
          <td>+1.5 <br/>+115</td>
          <td>Under 6.5 <br/>-111</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BettingExample;