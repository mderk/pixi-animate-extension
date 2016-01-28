/******************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright [2013] Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual 
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
******************************************************************************/

var ResourceManager = function(data) {
	this.m_shapes = [];
	this.m_movieClips = [];
	this.m_bitmaps = [];
	this.m_text =[];
	this.m_data = data;
	var id;

	//Parse shapes and movieClips	
	for(var shapeIndex =0; shapeIndex < this.m_data.DOMDocument.Shape.length; shapeIndex++)
	{
		id = this.m_data.DOMDocument.Shape[shapeIndex].charid;
		var shapeData = this.m_data.DOMDocument.Shape[shapeIndex];
		this.m_shapes[id] = shapeData;
	}
	
	for(var bitmapIndex =0; bitmapIndex < this.m_data.DOMDocument.Bitmaps.length; bitmapIndex++)
	{
		id = this.m_data.DOMDocument.Bitmaps[bitmapIndex].charid;
		var bitmapData = this.m_data.DOMDocument.Bitmaps[bitmapIndex];
		this.m_bitmaps[id] = bitmapData;
	}
	
	for(var textIndex =0; textIndex < this.m_data.DOMDocument.Text.length; textIndex++)
	{
		id = this.m_data.DOMDocument.Text[textIndex].charid;
		var textData = this.m_data.DOMDocument.Text[textIndex];
		this.m_text[id] = textData;
	}
	
	if(this.m_data.DOMDocument.Timeline !== undefined)
	{
		for(var movieClipIndex =0; movieClipIndex < this.m_data.DOMDocument.Timeline.length - 1; movieClipIndex++)
		{
			id = this.m_data.DOMDocument.Timeline[movieClipIndex].charid;
			var movieClipData = this.m_data.DOMDocument.Timeline[movieClipIndex];
			this.m_movieClips[id] = movieClipData;
		}
	}	
}

//Member functions
ResourceManager.prototype.getShape = function(id) {
	return this.m_shapes[id];
}

ResourceManager.prototype.getMovieClip = function(id) {
	return this.m_movieClips[id];
}

ResourceManager.prototype.getBitmap = function(id) {
	return this.m_bitmaps[id];
}

ResourceManager.prototype.getText = function(id) {
	return this.m_text[id];
}



