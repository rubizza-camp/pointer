import React, { Component } from 'react'
import moment from 'moment'
import { Container, Button, Form, FormGroup } from 'reactstrap'
import Select from 'react-select'
import Cookies from 'js-cookie'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates'
import { axiosPostRequest, axiosGetRequest } from '../../utils/axios_helper'

const OPTIONS = [
  { value: 'Pet', label: 'Pet' },
]

class DatePicker extends Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null,

  }

  reviewData = () => {
    const { task } = this.state
    return task
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { startDate, endDate } = this.state
    Cookies.set('petId', 1)
    axiosPostRequest(
    `/tasks`,
    {startDate,
       endDate,
        pet_id: Cookies.get('petId'),
      },
    this.createTask
    )
  }

  createTask = ({ data }) => {
    const { addTask } = this.props
    addTask(data)
    this.setState({ task: state })
  }

  render = () => {
    return(
      <Container>
        <Form>
          <FormGroup>
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="your_unique_start_date_id"
              endDate={this.state.endDate}
              endDateId="your_unique_end_date_id"
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
            />
          </FormGroup>
            <Button onClick={this.handleSubmit}>Create</Button>
          </Form>
      </Container>
    )
  }
}

export default DatePicker
