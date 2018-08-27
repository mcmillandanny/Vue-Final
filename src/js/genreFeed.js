Vue.component('genre', {
	props: ['game-object'],
  data: function () {
    return {
    }
  },
  template: `
  			<div>
  				<p>{{gameObject.name}}</p>
  				<p>{{gameObject.summary}}</p>
  				<p>{{gameObject.rating}}</p>		
  			</div>
  			`
})