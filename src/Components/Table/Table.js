import React, { useState, useEffect } from 'react';
import ReactTable from "react-table";
import PropTypes from 'prop-types';

export const Table = ({tableData}) => {
    const [TableRender, setTableRender] = useState([])
    useEffect(() => {
			setTableRender(tableData)
    }, [tableData])
    return (TableRender.length ? <ReactTable
			data={TableRender}
			columns={[
				{
				Header: "Movies",
				columns: [
					{
						id: "title",
						accessor: movie => movie.original_name || movie.title,
						headerStyle: {display: 'none'}
					},
					{
						headerStyle: {display: 'none'},
						expander: true,
						width: 65,
						Expander: ({ isExpanded, ...rest }) =>
							<div>
							{isExpanded
								? <span>&#x2299;</span>
								: <span>&#x2295;</span>}
							</div>,
						style: {
							cursor: "pointer",
							fontSize: 25,
							padding: "0",
							textAlign: "center",
							userSelect: "none"
						}
					}
				]
				}
			]}
			defaultPageSize={10}
			className="-striped -highlight"
			SubComponent={(event) => {
				const movie = TableRender[event.index]
				return (<div className="movieData">
					<img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="Movie-poster"/>
					<h6>{movie.original_name || movie.title} - {movie.release_date}</h6>
					<p>{movie.overview}</p>
				</div>)}}
			/> : <p>No movies loaded</p>)
}

Table.propTypes = {
	tableData: PropTypes.array
};
Table.defaultProps = {
	tableData: [],
};
