## Basic Data Format  
Each Note can have multiple properties that we want to graph, as well as other properties that are useful to display, 
but not necessarily part of the graph..
  
1. EncounterDateTime    <<Either a javascript Date Object OR it may be a String like 2016-08-05T13:30 >>  
2. DocumentName   <STRING>  This is the Note Title  
3. DocumentID     <INT>   This is a unique number for every document in the database  
4. ParentDocumentID  <INT>   This may be a -1 or None or not defined if there is no parent, otherwise it's an INT  
5. AuthorName   <String>  Who wrote the document, likely useful for on hover events and/or filters  
6. CosignatureName  <String>   Who cosigned the document  
7. CosignatureDateTime <DateObj>  If/When this document was co-signed, i.e. attending co-signed it  
8. renderType   <enumeration>   Important, Very Important, Ignore  
9. nodeColor  <color>    This is a string, either defaults to X or we can override that with this property  
10. nodeSize  <pixels>    May default or be overridden, or we may do small, medium and large... TBD  
11. nodeShape  <enumeration>   May be default, or orverridden using available shape types  
  
12. renderType:  Ths is to be determined, but I can imagine a Nutrition Consult note is not necessarily something I need to 
focus my attention, so this may be rendered in a light font and/or is easily removed/hidden;  whereas something like the H&P
or Daily Progress Notes are rendered as either BIGGER nodes and/or different color/etc.  
    
## Basic Implementation  
   In this instance, we have firstDate and generate a large Node for each Day; 
   each day is connected to the next day  
   Now each primary node (i.e. day) is then connected to each individual note  
   notes that are addenda are attached to their parentNote  
  
## Fun Use Cases:  
We could add an extra node for a cosigner, that is a different shape, and the "spring" or distance between it and the
parent document is a function of the time between the document being saved and the person signing it.  
  
Example below with 4 spaces makes it a code block
`print "HELLO WORLD"`
