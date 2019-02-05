import { pipe, size, words } from 'sanctuary'

export default (value = '') => pipe([words, size])(value)
