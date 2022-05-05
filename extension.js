/*
  Add user id in top panel
  (c) PINNAKKKK 2022
  License: GPL v3
  
  forked from:
  fthx 2021
*/

const Clutter = imports.gi.Clutter;
const St = imports.gi.St;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;


class Extension {
    constructor() {
    }

    enable() {
      this.id_label = new St.Label({text: GLib.get_real_name() + " :: " + GLib.get_user_name() + "@" + GLib.get_host_name(), 
                                    y_align: Clutter.ActorAlign.CENTER, style_class: "user-label"});
      this.aggregate_menu = Main.panel.statusArea['dateMenu'];
      Main.panel._rightBox.insert_child_at_index(this.id_label, this.aggregate_menu._power.length-2);
    }

    disable() {
		  this.Main.panel._rightBox.insert_child_at_index((this.id_label); 
    }
}

function init() {
	return new Extension();
}
