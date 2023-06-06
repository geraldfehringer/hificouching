#!/usr/bin/env perl;

use strict;
use warnings;
use Text::CSV;
use DateTime::Format::Excel;

my $tmpfile = "assets/csv/hifisetups_tmp3.csv";
my $file = "hifisetups_fix.csv";

open( my $output, '>', $file ) or die "'$file' would not open $!";
open my $fh, "<:encoding(utf8)", $tmpfile or die "$!";

my $csv = Text::CSV->new( { binary => 1, eol => "\n" } );

while ( my $row = $csv->getline( $fh ) ) {
    my $oldtime = $row->[0];
    my $newval = DateTime::Format::Excel->parse_datetime( $oldtime );
    $newval = $newval->iso8601();
    $row->[0] =~ s/$oldtime/$newval/;
    $csv->print( $output, $row );
}
