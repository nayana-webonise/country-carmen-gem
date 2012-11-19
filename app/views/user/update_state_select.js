

$("#addressStates").replaceWith(<%= escape_javascript(render 'states', :selected_states => @states) %>);
