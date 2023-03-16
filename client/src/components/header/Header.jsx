import { useState } from 'react';
import './header.css';
import { FaBed, FaPlane, FaTaxi, FaCar } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';
import { MdOutlineAttractions } from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import { SiYourtraveldottv } from 'react-icons/si';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const Header = ({ type }) => {

    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 1,
        room: 1,
    });

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } })
    };

    return (
        <div className='header'>
            <div className={
                type === "list" ? "headerContainer listMode" : "headerContainer"
            }
            >
                <div className="headerList">
                    <div className="headerListItem active">
                        <FaBed />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FaPlane />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <SiYourtraveldottv />
                        <span>Flight & Hotel</span>
                    </div>
                    <div className="headerListItem">
                        <FaCar />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <MdOutlineAttractions />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FaTaxi />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" &&
                    <>
                        <h1 className="headerTitle">
                            A lifetime of discounts? It's Genius.
                        </h1>
                        <p className="headerDesc">
                            Get rewarded for your travels  unlock instant savings of 10% or
                            more with a free FlashBooks account.
                        </p>
                        <div className="headerSearch"
                        >
                            <div className="headerSearchItem loc"
                            >
                                <FaBed className='headerIcon' />

                                <input type="text"
                                    placeholder='where are you going?'
                                    className="headerSearchInput"
                                    onChange={e => setDestination(e.target.value)} />

                            </div>

                            <div className="headerSearchItem cal" onClick={() => setOpenDate(!openDate)}
                            >
                                <BiCalendar className='headerIcon' />
                                <span className='headerSearchText'
                                    placeholder='Check-in-date -- check-out-date'
                                >
                                    {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                                </span>
                                {openDate && <DateRange editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()} />}

                            </div>

                            <div className="headerSearchItem per" onClick={() => setOpenOptions(!openOptions)}
                            >
                                <MdPersonAdd className='headerIcon' />
                                <span className='headerSearchText'
                                >
                                    {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                                </span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">
                                            Adult
                                        </span>
                                        <div className="optionCounterA">
                                            <button
                                                disabled={options.adult <= 1}
                                                className="optionCounterButton"
                                                onClick={() => handleOption("adult", "d")}
                                            >
                                                -
                                            </button>
                                            <span className="optionCounterNumber">
                                                {options.adult}
                                            </span>
                                            <button
                                                className="optionCounterButton"
                                                onClick={() => handleOption("adult", "i")}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounterB">
                                            <button
                                                disabled={options.children <= 0}
                                                className="optionCounterButton"
                                                onClick={() => handleOption("children", "d")}
                                            >
                                                -
                                            </button>
                                            <span className="optionCounterNumber">
                                                {options.children}
                                            </span>
                                            <button
                                                className="optionCounterButton"
                                                onClick={() => handleOption("children", "i")}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Room</span>
                                        <div className="optionCounterC">
                                            <button
                                                disabled={options.room <= 1}
                                                className="optionCounterButton"
                                                onClick={() => handleOption("room", "d")}
                                            >
                                                -
                                            </button>
                                            <span className="optionCounterNumber">
                                                {options.room}
                                            </span>
                                            <button
                                                className="optionCounterButton"
                                                onClick={() => handleOption("room", "i")}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                </div>}
                            </div>
                            <div className='headerSearchItem Btn'>
                                <button className="headerBtn"
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    );
};

export default Header;