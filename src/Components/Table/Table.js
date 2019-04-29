import React, { useState, useEffect } from 'react';
import ReactTable from "react-table";
import PropTypes from 'prop-types';

const imgBasePath = 'https://image.tmdb.org/t/p/w500'

export const Table = ({tableData}) => {
    const [TableRender, setTableRender] = useState(tableData)
    useEffect(() => {
		setTableRender(tableData)
    }, [tableData])
    return (TableRender.length ? <ReactTable
			data={TableRender}
			columns={[
				{
				Header: 'Results',
				columns: [
					{
						id: 'title',
						accessor: movie => movie.original_name || movie.title,
						headerStyle: {display: 'none'}
					},
					{
						headerStyle: {display: 'none'},
						expander: true,
						width: 65,
						Expander: ({ isExpanded }) =>
							<div>
							{isExpanded
								? <span>&#x2299;</span>
								: <span>&#x2295;</span>}
							</div>,
						style: {
							cursor: 'pointer',
							fontSize: 25,
							padding: 0,
							textAlign: 'center',
							userSelect: 'none'
						}
					}
				]
				}
			]}
			showPageSizeOptions={false}
			defaultPageSize={10}
			className='-striped -highlight'
			SubComponent={({index}) => {
				const movie = TableRender[index]
				return (<div className='movieData'>
					{movie.backdrop_path 
					? <img src={`${imgBasePath}${movie.backdrop_path}`} alt='Movie-poster'/> 
					: null}
					<h6>{movie.original_name || movie.title} - {movie.release_date}</h6>
					<p>{movie.overview}</p>
				</div>)}}
			/> : null)
}

Table.propTypes = {
	tableData: PropTypes.array
}
Table.defaultProps = {
	tableData: [],
}
