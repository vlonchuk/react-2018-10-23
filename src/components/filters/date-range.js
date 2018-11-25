import React from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import { changeDateRange } from '../../ac'
import 'react-day-picker/lib/style.css'
import { Consumer as TranslateConsumer } from '../../contexts/translate'

class DateRange extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  }

  handleDayClick = (day) => {
    const { changeDateRange, range } = this.props
    changeDateRange(DateUtils.addDayToRange(day, range))
  }

  render() {
    const { from, to } = this.props.range
    const modifiers = { start: from, end: to }
    return (
      <TranslateConsumer>
        {(dictionary) => (
          <div className="RangeExample">
            <p>
              {!from && !to && dictionary.SELECT_FIRST_DAY}
              {from && !to && dictionary.SELECT_LAST_DAY}
              {from &&
                to &&
                dictionary.SELECTED_FROM +
                  from.toLocaleDateString() +
                  dictionary.SELECTED_TO +
                  to.toLocaleDateString()}{' '}
            </p>
            <DayPicker
              className="Selectable"
              numberOfMonths={this.props.numberOfMonths}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
            />
          </div>
        )}
      </TranslateConsumer>
    )
  }
}

export default connect(
  (state) => ({
    range: state.filters.dateRange
  }),
  { changeDateRange }
)(DateRange)
