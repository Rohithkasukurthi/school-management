import axios from 'axios';

const baseURL = 'http://localhost:4000';

export const getAllSchools = async () => {
  try {
    const response = await axios.get(`${baseURL}/schools`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSchoolById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/schools/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postSchool = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/schools`, data);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putSchool = async (id, data) => {
  try {
    const response = await axios.put(`${baseURL}/schools/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSchool = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/schools/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
