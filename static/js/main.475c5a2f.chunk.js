(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),r=a.n(i),s=(a(16),a(8),a(1)),c=a(2),l=a(4),u=a(3),m=a(5),p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e;return e=null!==this.props.movie.vote_average?this.props.movie.vote_average:"No rating available.",o.a.createElement("div",{className:"card",key:this.props.movie.id},o.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(this.props.movie.poster_path),alt:this.props.movie.title.concat(" poster")}),o.a.createElement("h3",{className:"card-title"},this.props.movie.title),o.a.createElement("p",{className:"card-subtitle text-muted"},"Original Title: ",this.props.movie.original_title),o.a.createElement("p",{className:"card-subtitle text-muted"},"Release Date: ",this.props.movie.release_date),o.a.createElement("p",{className:"card-subtitle text-muted"},"Average Rating (out of 10): ",e),o.a.createElement("p",{className:"card-text"},this.props.movie.overview))}}]),t}(n.Component),d=a(6),h=a.n(d),v=(a(17),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={region:"GR",regionName:"Greece",regions:[],regionsMap:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"loadMovie",value:function(){var e=this;console.log("Fetching JSON from TMDB");var t="https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("bbb0e77b94b09193e6f32d5fac7a3b9c","&region=").concat(this.state.region);h.a.ajax({url:t,success:function(t){console.log("Fetched data successfully!"),e.setState({movie:t.results})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"componentDidMount",value:function(){this.loadMovie(),this.loadRegions()}},{key:"loadRegions",value:function(){var e=this;console.log("Fetching JSON from REST Countries EU");h.a.ajax({url:"https://restcountries.eu/rest/v2/all",success:function(t){console.log("Region data fetched data successfully!");var a=t.reduce(function(e,t){return e[t.alpha2Code]=t,e},{});e.setState({regions:t,regionsMap:a})},error:function(e,t,a){console.error("Failed to fetch region data")}})}},{key:"componentDidUpdate",value:function(e,t){this.state.region!==t.region&&this.loadMovie()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"MovieData"),o.a.createElement("p",null,"A React Project")),o.a.createElement("div",{className:"jumbotron"},o.a.createElement("h2",null,o.a.createElement("strong",null,"Now Playing in ",this.state.regionsMap&&this.state.regionsMap[this.state.region].name))),o.a.createElement("div",{id:"search"},o.a.createElement("p",null,"Select a different country:"),o.a.createElement("select",{onChange:function(t){return e.setState({region:t.target.value})}},this.state.regions.map(function(e){return o.a.createElement("option",{key:e.alpha2Code,value:e.alpha2Code},e.name)}))),o.a.createElement("div",{className:"movies"},this.state.movie&&this.state.movie.map(function(e){return o.a.createElement(p,{key:e.id,movie:e})})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.475c5a2f.chunk.js.map