import React from "react";
import { Card } from "react-bootstrap";

const Calendar = () => {
  return (
    <Card className="p-3 shadow">
      <h5>Employee's Calendar</h5>
      <p>📅 May 2023</p>
      <table className="table">
        <thead>
          <tr>
            <th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th><th>Su</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
          <tr><td>8</td><td>9</td><td>10</td><td>11</td><td><b>12</b></td><td>13</td><td>14</td></tr>
          <tr><td>15</td><td>16</td><td>17</td><td><b>18</b></td><td>19</td><td>20</td><td>21</td></tr>
        </tbody>
      </table>
    </Card>
  );
};

export default Calendar;
