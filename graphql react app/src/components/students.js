import React from 'react'
import { useQuery, gql } from '@apollo/client';
// import { gql } from 'apollo-boost';

const GET_STUDENTS = gql`
  query GetStudentsData {
    students {
        name
    }
  }
`;

export default function Student() {

const { loading, error, data } = useQuery(GET_STUDENTS);

if (loading)
  return <h2>Loading...</h2>

if (error)
    return <h2>{"error =>"+ error}</h2>
console.log(data);

  return (
        <div>
            <h2>Students Data</h2>
        </div>
    )
}
