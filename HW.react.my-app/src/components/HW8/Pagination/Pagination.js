import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const AddPagination = ({elemPerPage,totalElem,currentPage,paginate}) => {
    const pageNumbers = []

    for (let i =1; i <= Math.ceil(totalElem / elemPerPage);i++  ){
        pageNumbers.push(i)
    }
    return (
        <Stack spacing={2} marginTop={5}>
            <Pagination count={pageNumbers.length}
                        showFirstButton
                        showLastButton
                        size="large"
                        page={currentPage}
                        onChange={
                (_,number)=>paginate(number)
            }
            />
        </Stack>
    )
}
export default AddPagination