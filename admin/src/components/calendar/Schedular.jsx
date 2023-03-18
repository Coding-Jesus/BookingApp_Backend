import React, { useContext, useState } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { scheduleData } from '../../data/dummy';
import './calendar.scss';
import { DarkModeContext } from '../../context/darkModeContext';


const PropertyPane = (props) => <div className="Header">{props.children}</div>;


const Scheduler = () => {
    const [scheduleObj, setScheduleObj] = useState();
    const { darkMode } = useContext(DarkModeContext);

    const change = (args) => {
        scheduleObj.selectedDate = args.value;
        scheduleObj.dataBind();
    };

    const onDragStart = (arg) => {
        // eslint-disable-next-line no-param-reassign
        arg.navigation.enable = true;
    };

    return (
        <div className="calendar    ">
            {darkMode && <link rel="stylesheet" type="text/css" href="https://cdn.syncfusion.com/ej2/material-dark.css" />}
            <ScheduleComponent
                height="650px"
                ref={(schedule) => setScheduleObj(schedule)}
                selectedDate={new Date(2021, 0, 10)}
                eventSettings={{ dataSource: scheduleData }}
                dragStart={onDragStart}
                timeScale={false}
            >
                <ViewsDirective>
                    {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
                </ViewsDirective>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
            </ScheduleComponent>
            <PropertyPane>
                <table
                    className='calTable'
                    style={{ width: '100%' }}
                >
                    <tbody>
                        <tr style={{ height: '50px' }}>
                            <td style={{ width: '100%' }}>
                                <DatePickerComponent
                                    value={new Date()}
                                    showClearButton={false}
                                    placeholder="Current Date"
                                    floatLabelType="Always"
                                    change={change}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </PropertyPane>
        </div >
    );
};

export default Scheduler;