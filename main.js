const str = `
010-7335-8035
day_adm@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=범죄도시
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;
console.log(str.match(/(?<=@).{1,}/g));
