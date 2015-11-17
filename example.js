    function Cell(title) {
      this.title = title;
    }
    Cell.prototype.render = function() {
      return "<td>"+this.title+"</td>";
    }
    function Row(parent) {
      this.parent = parent;
      this.cells = [];
    }
    Row.prototype.add_cell = function(cell) {
      this.cells.push(cell);
    }
    Row.prototype.render = function() {
      var buf = "<tr>";
      var i;
      for(i=0; i<this.cells.length; i++) {
        buf += this.cells[i].render();
      }
      return buf+"</tr>";
    }
    function Table() {
      this.rows = [];
    }
    Table.prototype.import = function(data) {
      var i;
      for(i=0; i<data.length; i++) {
        var row = data[i];
        var temp_row = new Row();
        var j;
        for(j=0; j < row.length; j++) {
          temp_row.add_cell( new Cell(row[j] ));
        }
        this.add_row(temp_row);
      }
    }
    Table.prototype.add_row = function(row) {
      this.rows.push(row);
    }
    Table.prototype.render = function() {
      var buf = "<table>";
      var i;
      for(i=0; i<this.rows.length; i++) {
        buf += this.rows[i].render();
      }
      return buf+"</table>";
    }
