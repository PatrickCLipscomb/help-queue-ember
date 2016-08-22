import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['location:descg'],
  location: 'Graceland',

  sortedTickets: Ember.computed.sort('tickets', 'sortBy'),

  sortedTicketsName: Ember.computed.filterBy('tickets', 'location', 'Graceland')
});
