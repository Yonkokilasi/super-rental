import DS from 'ember-data';

export default DS.Model.extend({
    owner: DS.attr(),
    bedroom: DS.attr(),
    city: DS.attr(),
    type: DS.attr(),
    image: DS.attr(),

});
